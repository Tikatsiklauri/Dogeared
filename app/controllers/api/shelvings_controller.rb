class Api::ShelvingsController < ApplicationController
    def create
        @new_shelving = Shelving.new
        @new_shelving.book_id = params[:shelving][:bookId]
        @new_shelving.shelf_id = params[:shelving][:shelfId]

    default_ids = current_user.default_shelves.map(&:id)
    existing = Shelving.find_by(book_id: params[:shelving][:bookId].to_i, shelf_id: params[:shelving][:shelfId].to_i)
    existing_default = current_user.default_shelving(params[:shelving][:bookId].to_i)
    if default_ids.include?(@new_shelving.shelf_id) && existing_default
      existing_default.shelf_id = params[:shelving][:shelfId]
      @new_shelving = existing_default
      @new_shelving.save
      @shelf = Bookshelf.find(params[:shelving][:shelfId])
      @shelves = @new_shelving.book.shelves
      render :show
    elsif existing 
      @new_shelving = existing 
      @shelf = existing.shelf
      @shelves = @new_shelving.book.shelves
      render :show
    elsif @new_shelving.save
      @shelf = @new_shelving.shelf
      @shelves = @new_shelving.book.shelves
      render :show
    else
      render @new_shelving.errors.full_messages, status: 422
    end
    end
    
    def destroy
        @new_shelving = Shelving.find(params[:id])
        if @new_shelving
            @new_shelving.destroy
        else
            render json: ['Book not found'], status: 404
        end
    end
    
    private
    def shelving_params
        params.require(:shelving).permit(:book_id, :shelf_id)
    end
end