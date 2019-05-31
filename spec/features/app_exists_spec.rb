require 'rails_helper'

feature 'App exists', js: true do
  scenario 'app exists' do
    When 'user visits the app' do
      visit('/')
    end

    Then 'user sees they are on rails' do
      wait_for { page }.to have_content("Yay! You’re on Rails!")
    end
  end

  scenario 'react app exists' do
    When 'user visits the app' do
      visit('/profile')
    end

    Then 'user sees they are on rails' do
      wait_for { page }.to have_content('Hello React!')
    end
  end
end