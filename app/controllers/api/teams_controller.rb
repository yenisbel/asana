class Api::TeamsController < ApplicationController

    def index 
        @teams = Team.all 
        render :index
    end 

    def create 
        @team = Team.new(team_params)
        if @team.save 
            render :show
        else
            render json: @team.errors.full_messages
        end
    end 

    def show
        @team = Team.find(params[:id])
        if @team
            render :show
        else
            render json: "None team was found", status: 422
        end
    end

    private
    def team_params
        params.require(:team).permit(:name, :description)
    end 
end