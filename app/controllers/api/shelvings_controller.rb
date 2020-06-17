class Api::ShelvingsController < ApplicationController
    def create
        @shelving = Shelving.new(shelving_params)
        if @shelving.save
          @shelf = @shelving.shelf
          render '/api/shelves/show'
        else
          render json: @shelving.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @shelving = Shelving.includes(:book).where(shelving_params).first
        @shelving.destroy
        @shelf = Shelving.find(@shelving.shelf)
        render '/api/shelves/show', status: 202
    end
    
    private
    def shelving_params
        params.require(:shelving).permit(:book_id, :shelf_id)
    end
end