class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user
            @team = @user.teams.first
            login(@user)
            render 'api/users/show'
        else
            render json: ["Wrong email/password"], status: 401
        end 
    end  

    def destroy 
        @user = current_user
        @team = @user.teams.first
        if @user
            logout
            render 'api/users/show'
        else  
            render json: ["No user found"], status: 404
        end 
    end 

end 