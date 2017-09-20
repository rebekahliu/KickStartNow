class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json:["invalid credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render 'api/users/show'
    else
      render json:["user not found"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
