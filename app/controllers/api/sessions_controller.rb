class Api::SessionsController < ApplicationController

    def create 
        p params
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user
            login(@user)
            render json: @user
        else
            render json: ["Wrong email/password"], status: 401
        end 
    end  

    def destroy  
        if current_user
            logout
            render json: {}
        else  
            render json: ["No user found"], status: 404
        end 
    end 

end 