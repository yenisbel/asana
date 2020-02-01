class Api::MembersController < ApplicationController
    before_action :require_logged_in
  
    def index
       @members = current_team.members
      render :index
    end
  
    def destroy
        @member = User.find(params[:id])
        if @member
            current_team.members = current_team.members - [@member]
            current_team.save
            render json: {id: @member.id}
        end
    end

    # def create
    # end

    def show     
        @member = User.find(params[:id])      
        render :show
    end
  
end

