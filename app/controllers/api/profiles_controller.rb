module Api
  class ProfilesController < ApplicationController
    # before_action :set_profile, only: [:show]

    def index
      @profiles = Profile.all
      render json: @profiles
    end

    def show
      @profile = Profile.first
      render json: { profile: @profile }
    end

    private

    def secure_params
      params.require(:profile).permit(:id, :name, :url, :logo)
    end
  end
end