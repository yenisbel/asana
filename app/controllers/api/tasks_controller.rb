class Api::TasksController < ApplicationController
    # before_action :require_logged_in
  
    def create
      @task = Task.new(task_params)
      @task.project_id = params[:project_id]
      @task.author_id = current_user.id
      if @task.save
        render :show
      else
        render json: @task.errors.full_messages, status: 422
      end
    end
  
    def update
      @task = Task.find(params[:id])
      if @task.update(task_params)
        render :show
      else
        render json: @task.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @task = Task.find(params[:id])
      @task.destroy
      render :show
    end
  
    def show
      @task = Task.find(params[:id])
      render :show
    end
  
    def index
    #   @tasks = current_user.authored_tasks
      @tasks = Task.all
      render :index
    end
  
    private
  
    def task_params
      params.require(:task).permit(:title, :description, :due_on, :completed)
    end
  end