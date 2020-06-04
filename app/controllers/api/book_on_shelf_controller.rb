class Api::BookOnShelfController < ApplicationController

    def index
        @shelves = BookOnShelf.all
        render :index
    end

    def show
        @shelf = BookOnShelf.all.where(shelf_id: params[shelfId])
        render :show
    end

    def create

    end
    
    
    
    
    
    
    private

    def Book_On_Shelf_params
        params.require(:book_on_shelf).permit(:book_id, :shelf_id)
    end  
    
end