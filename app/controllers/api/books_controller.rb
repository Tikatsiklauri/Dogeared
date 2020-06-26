class Api::BooksController < ApplicationController 
    def index
       @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    # def create
    #     @book = Book.new(book_params)
    # end

    # def destroy
    #     @book = Book.find(params[:id])
    #     @book.destroy
    #     render "api/shelves/show"
    # end

    private
    def book_params
        params.require(:book).permit(:title, :author, :genre, :date, :overview)
    end
end