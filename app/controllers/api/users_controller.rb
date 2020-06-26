class Api::UsersController < ApplicationController 
    def show
        @user = User.find(params[:id])
       
    end

    def create
        @user = User.new(user_params)
      
        if @user.save
            @all_shelves = Shelf.create!({user_id: @user.id, name: "All"})
            @read_shelf = Shelf.create!({user_id: @user.id, name: "Read"})
            @reading_shelf = Shelf.create!({user_id: @user.id, name: "Currently Reading"})
            @want_read_shelf = Shelf.create!({user_id: @user.id, name: "Want to Read"})
            login!(@user)
        
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

   
    private

    def user_params
        params.require(:user).permit(:email, :password, :name)
    end

end