class Api::TeamsController < ApplicationController
  before_action :require_logged_in

  def create

    @team = Team.new(team_params)

    if @team.save
      Membership.create!(team_id: @team.id, member_id: current_user.id)
      @members = @team.members
      @current_team = @team
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def destroy #remove?
    @team = Team.find(params[:id])
    @membership = Membership.find_by(team_id: @team.id)
    @teams = current_user.teams
    if (@membership.team_id ==  @current_team&.id) && (@membership.member_id == current_user.id) && (@teams.length > 1)
      @membership.destroy
      render json: {id: @team.id}
    elsif @teams.length <= 1
      render json: ["If you want to be removed from this team, please create a new team"]
    end
  end

  def show
    @team = Team.includes(projects: [:columns]).find(params[:id])
    render :show
  end

  def index
    @teams = current_user.teams 
    render :index
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end

end
