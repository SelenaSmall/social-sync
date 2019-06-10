module Api
  class ProfilesController < ApplicationController
    def index
      @profiles = Profile.all
      render json: @profiles.each do |profile|
        {
          name: profile.name,
          url: profile.url,
          logo: profile.logo
        }
      end
    end
  end
end