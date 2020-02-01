class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @team = Team.create!(name: 'First Team')
      Membership.create!(member_id: @user.id, team_id: @team.id)
      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def index 
  #   @users = User.all # get all users so that you can assign them to a team
  # end
  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
