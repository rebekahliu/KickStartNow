Rails.application.routes.draw do
  namespace :api do
    get 'rewards/create'
  end

  namespace :api do
    get 'rewards/index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :projects, only: [:create, :index, :show, :update, :destroy]
    resources :rewards, only: [:create]
  end
end
