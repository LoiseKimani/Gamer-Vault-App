Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :games, only: [:index, :show, :create]
  resources :game_reviews, only: [:index, :show, :create, :destroy]

  resources :games
  resources :game_reviews
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
