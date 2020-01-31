class Api::ProjectsController < ApplicationController
    # before_action :require_logged_in
    def index 
        # @projects = current_user.projects 
        @projects = Project.all
        render :index
    end 

    def create 
        @project = Project.new(project_params)
        @project.team_id = params[:team_id]
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages
        end
    end 

    def show
        @project = Project.find(params[:id])
        if @project
            render :show
        else
            render json: "None team was found", status: 422
        end
    end

    def update 
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages
        end
    end 

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render json: {id: @project.id}
    end

    private
    def project_params
        params.require(:project).permit(:name, :description)
    end 
end