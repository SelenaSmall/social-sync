module Api
  class UsersController < ApplicationController
    before_action :set_user, only: [:username, :password]

    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.first
      render json: { user: @user.username }
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(secure_params)
      if @user.save
        session[:current_user_id] = @user.id
        redirect_to user_path(@user.id)
      else
        redirect_back(fallback_location: new_user_path,
                      alert: "Cannot create!
                      #{@user.errors.full_messages.join(', ')}")
      end
    end

    private

    def secure_params
      params.require(:user).permit(:username, :password)
    end
  end
end