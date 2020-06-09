class Api::BooksController < ApplicationController 
    def index
        if params[:shelf_id]
            @shelf = Shelf.find_by(id: Integer(params[:shelfId]))
            @books = @shelf.books
        else
            @books = Book.all
        end
        render :index 
    end

    def show
        @book = Book.find(params[:id])
        @shelves = @book.shelves
        render :show
    end

    def create
        @book = Book.new(book_params)
    end

    def destroy
        @book = Book.fins(params[:id])
        @book.destroy
        render "api/shelves/show"
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :genre, :date, :overview)
    end
end