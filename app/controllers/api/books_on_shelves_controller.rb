class Api::BooksOnShelvesController < ApplicationController

    def index
        @shelves = BookOnShelf.all
        render :index
    end

    def show
        @shelf = BookOnShelf.all.where(shelf_id: params[shelfId])
        render :show
    end

    def create
        @new_shelf = BookOnShelf.new(book_on_shelf_params)
        @current_user = Shelf.find_by(id: :book_on_shelf_params[:shelf_id].user_id)
        @shelf_name = Shelf.find_by(:id @new_shelf.shelf_id).name

        if @new_shelf.save
            if @shelf_name == "Read" ||
                @shelf_name == "Want to Read" || 
                @shelf_name == "Currently Reading"

                @newShelves = Book.find_by(id: :book_on_shelf_params[:book_id].shelves.where(user_id: @curretn_user))
                @newShelves.each do |shelf|
                    if shelf.name == "Read" ||
                        shelf.name == "Want to Read" ||
                        shelf.name == "Currently Reading" 

                        @book_on_shelf_undo = Shelf.find_by(:id shelf.id).book_on_shelf.where(:book_id :book_on_shelf_params[:book_id])[0]
                        if @new_shelf.id != @book_on_shelf_undo.id
                            @book_on_shelf_undo.destroy
                        end
                    end
                end
            end
            if @shelves
                @shelves = Book.find_by(:id book_on_shelf_params[:book_id]).shelves.where(user_id: @curretn_user)
            end
            render :show
        end
    end
    
    
    def destroy
        @shelf = BookOnShelf.find(params[:id])
        @shelf.destroy
        render :json {id: @shelf.id, book_id: @shelf.book_id}
    end
    
    
    
    private

    def book_on_shelf_params
        params.require(:book_on_shelf).permit(:book_id, :shelf_id)
    end  
    
end