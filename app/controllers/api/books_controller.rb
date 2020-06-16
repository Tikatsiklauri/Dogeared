class Api::BooksController < ApplicationController 
    def index
       @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
        if current_user
            @book_shelves = @book.shelves.where(user: current_user)
            @user_default_shelvings = current_user.default_books
            @user_default_shelves = current_user.shelves.includes(:books).limit(4)
            @user_made_shelves = current_user.shelves.includes(:books).offset(4)
        end
        if @book
            render :show
        else 
            render json: @book.errors.full_messages, status: 422
        end
    end

    def create
        @book = Book.new(book_params)
    end

    def destroy
        @book = Book.find(params[:id])
        @book.destroy
        render "api/shelves/show"
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :genre, :date, :overview)
    end
end