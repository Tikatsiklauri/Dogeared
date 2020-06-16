class Api::ShelvesController < ApplicationController
    def index 
        
        @shelves = Shelf.where(user_id: current_user.id)
        @books = @shelves.map{|shelf| shelf.book_ids}.flatten
          if current_user
            @user_default_shelvings = current_user.default_books
            @user_default_shelves = current_user.shelves.includes(:books).limit(4)
            @user_made_shelves = current_user.shelves.includes(:books).offset(4)
        end

        render :index
    end

    def show
        @shelf = Shelf.find(params[:id])
        @shelves = @shelf.user.shelves.includes(:shelvings)
          if current_user
            @user_default_shelvings = current_user.default_books
            @user_default_shelves = current_user.shelves.includes(:books).limit(4)
            @user_made_shelves = current_user.shelves.includes(:books).offset(4)
        end
        render :show
    end
    
    
    def create 
        @shelf = Shelf.new(shelf_params)
        @shelf.user_id = current_user.id
        @shelves = @shelf.user.shelves.includes(:shelvings)
        @user_default_shelvings = current_user.default_books
        @user_default_shelves = current_user.shelves.includes(:books).limit(4)
        @user_made_shelves = current_user.shelves.includes(:books).offset(4)
        if @shelf.save
            render :show
        else
            render json: @shelf.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @shelf = Shelf.find(params[:id])
           if @shelf.name != "All" &&
            @shelf.name != "Read" &&
            @shelf.name != "Want to Read" &&
            @shelf.name != "Currently Reading"
            @shelf.destroy 
            render :show
        end
    end

    private
    
    def shelf_params
        params.require(:shelf).permit(:name, :user_id)
    end
    
    
end