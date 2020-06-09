class Api:ShelfController < ApplicationController
    def index 
        @shelves = Shelf.where(user_id: current_user.id)

        if @shelves.first === nil
            Shelf.new({used_is: current_user.id, title: "All"}).save
            Shelf.new({used_is: current_user.id, title: "Read"}).save
            Shelf.new({used_is: current_user.id, title: "Want to Read"}).save
            Shelf.new({used_is: current_user.id, title: "Currently Reading"}).save 
        end
        render json: @shelves
    end

    def show
        @shelf = Shelf.find_by(id: params[:id])
        render :show
    end
    
    
    def create 
        @shelf = Shelf.new(shelf_params)
        if shelf.save
            render :show
        end
    end
    
    def destory
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