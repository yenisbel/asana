class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @team = Team.create!(name: 'First Team')
      @current_team = @team
      Membership.create!(member_id: @user.id, team_id: @team.id)
      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index 
    @users = User.all 
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
        render :show
    else
        render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
        render :show
    else
        render json: @user.errors.full_messages
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:id, :username, :password, :full_name, :photo_url)
  end
end
