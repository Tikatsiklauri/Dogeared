class Api::ShelvesController < ApplicationController
    def index 
        
        @shelves = Shelf.where(user_id: current_user.id)

        render :index
    end

    def show
        @shelf = Shelf.find_by(id: params[:id])
        render :show
    end
    
    
    def create 
        @shelf = Shelf.new(shelf_params)
        if @shelf.save
            render :show
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

    def shelving_book
        debugger
        @shelved_book = Book.find_by(id: params[:book_id])
    end

    private
    
    def shelf_params
        params.require(:shelf).permit(:name, :user_id)
    end
    
    
end