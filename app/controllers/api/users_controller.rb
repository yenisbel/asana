class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save
            @team = Team.create!(name: 'First')
            TeamMember.create!(member_id: @user.id, team_id: @team.id) 
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages
        end 
    end  

    private 
    def user_params 
        params.require(:user).permit(:email, :password)
    end 
end 