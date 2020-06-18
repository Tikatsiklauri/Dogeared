class Api::ShelvesController < ApplicationController

    def index 
        @shelves = User.find(current_user.id).shelves
    end

    def show
        @shelf = Shelf.find(params[:id])
    end
    
    
    def create 
        @shelf = Shelf.new(shelf_params)
        if @shelf.save
            render :show
        else
            render json: @shelf.errors.full_messages, status: 422
        end
    end

      def update
        @shelf = Shelf.find(params[:id])
        if @shelf.update(shelf_params)
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