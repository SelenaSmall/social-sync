module Api
  class ProfilesController < ApplicationController
    def index
      @profiles = Profile.all
      render json: @profiles.each do |profile|
        {
          id: profile.id,
          name: profile.name,
          url: profile.url,
          logo: profile.logo
        }
      end
    end

    private

    def secure_params
      params.require(:profile).permit(:id, :name, :url, :logo)
    end
  end
end