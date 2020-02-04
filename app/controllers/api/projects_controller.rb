class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def create
    @project = Project.new(project_params)

    @project.team_id = params[:team_id]
   
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show

    @project = Project.includes(columns: [:tasks]).find(params[:id])
    
    render :show
  end

  def index
    @projects =  @current_team&.projects.includes(columns: [:tasks])
    render :index
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.team_id ==  @current_team&.id
      @project.destroy
      render json: {id: @project.id}
    end
  end

  private

  def project_params
    params.require(:project).permit(:description, :name)
  end
end
