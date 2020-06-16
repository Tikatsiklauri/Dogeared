class Api::UsersController < ApplicationController 
    def show
        @user = User.includes(:shelves, :books).find(params[:id])
        if @user
            render '/api/users/shelves'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.new(user_params)
      
        if @user.save
            login!(@user)
        
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

   
    private

    def user_params
        params.require(:user).permit(:email, :password, :name)
    end

end