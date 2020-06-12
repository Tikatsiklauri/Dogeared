class Api::UsersController < ApplicationController 

    def create
        @user = User.new(user_params)
      
        if @user.save
            login!(@user)
            Shelf.create({user_id: @user.id, name: "All"})
            Shelf.create({user_id: @user.id, name: "Read"})
            Shelf.create({user_id: @user.id, name: "Currently Reading"})
            Shelf.create({user_id: @user.id, name: "Want to Read"})

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