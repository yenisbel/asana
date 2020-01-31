class Api::TeamsController < ApplicationController
    # before_action :require_logged_in
    def index 
        # @teams = current_user.teams 
        @teams = Team.all 
        render :index
    end 

    def create 
        @team = Team.new(team_params)
        if @team.save
            TeamMember.create!(member_id: current_user.id, team_id: @team.id) 
            @members = @team.members 
            render :show
        else
            render json: @team.errors.full_messages
        end
    end 

    def show
        @team = Team.includes(projects: [:tasks]).find(params[:id])
        if @team
            render :show
        else
            render json: "None team was found", status: 422
        end
    end

    def update 
        @team = Team.find(params[:id])
        if @team.update(team_params)
            render :show
        else
            render json: @team.errors.full_messages
        end
    end 

    def destroy
        @team = Team.find(params[:id])
        @membership = TeamMember.find_by(team_id: @team.id)
        @teams = current_user.teams
        if (@membership.member_id == current_user.id) && (@teams.length > 1)
          @membership.destroy
          render json: {id: @team.id}
        elsif @teams.length <= 1
          render json: ["If you want to be removed from this team, please create a new team"]
        end
    end

    private
    def team_params
        params.require(:team).permit(:name, :description)
    end 
end