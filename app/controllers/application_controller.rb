class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :require_logged_in, :current_team, :all_columns, :all_tasks
  
  before_action :current_team

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])

  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def current_team
    if params[:team_id]
      @current_team = Team.find(params[:team_id])
    end
    if @current_team.nil? && current_user
      @current_team = current_user.teams.first
    end
  end

  def require_logged_in
    unless current_user
      render json: {base: ['invalid credentials']}, status: 401
    end
  end

  def all_columns
    @projects = @current_team.projects.select(:id)
    columns_arr = []
    @projects.each do |project|
      columns = Column.all.where(project_id: project.id)
      columns_arr += columns
    end
    columns_arr
  end

  def all_tasks
    @columns = all_columns
    tasks_arr = []
    @columns.each do |column|
      tasks = Task.all.where(column_id: column.id)
      tasks_arr += tasks
    end
    tasks_arr
  end

  def page_not_found
    respond_to do |format|
      format.html { render template: 'errors/not_found_error', layout: 'layouts/application', status: 404 }
      format.all  { render nothing: true, status: 404 }
    end
  end

end
