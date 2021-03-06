Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/' => "landing#index"

  namespace :api do
    resources :users, only: [:index, :new, :create, :destroy, :show]
    resources :profiles, only: [:index]
  end
end
