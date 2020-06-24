class Api::ShelvingsController < ApplicationController
  skip_before_action :verify_authenticity_token  
  def create
      shelf = Shelf.find(params[:shelving][:shelf_id])
      if shelf && ['Read', 'Currently Reading' , 'Want to Read'].include?(shelf.name)
        read = Shelf.find_by(name: 'Read', user_id: current_user)
        curr = Shelf.find_by(name: 'Currently Reading', user_id: current_user)
        want = Shelf.find_by(name: 'Want to Read', user_id: current_user)
        readShelf = Shelving.find_by(shelf_id: read.id, book_id: params[:shelving][:book_id])
        currShelf = Shelving.find_by(shelf_id: curr.id, book_id:  params[:shelving][:book_id])
        wantShelf = Shelving.find_by(shelf_id: want.id, book_id:  params[:shelving][:book_id])
        Shelving.destroy(readShelf.id) if readShelf
        Shelving.destroy(currShelf.id) if currShelf
        Shelving.destroy(wantShelf.id) if wantShelf
      end
      @shelving = Shelving.new(shelving_params)
        if @shelving.save
          cody = Shelving.create(shelf_id: params[:shelving][:all_id], book_id: params[:shelving][:book_id])
          @shelf = @shelving.shelf
          render '/api/shelves/show'
        else
          render json: @shelving.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @shelving = Shelving.includes(:book).where(shelving_params).first
        @shelving.destroy
        @shelf = Shelving.find(@shelving.shelf)
        render '/api/shelves/show', status: 202
    end
    
    private
    def shelving_params
        params.require(:shelving).permit(:book_id, :shelf_id)
    end

    def all_shelf_params
      params.require(:shelving).permit(:book_id, :all_id)
    end
end