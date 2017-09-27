Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :projects, only: [:create, :index, :show, :update, :destroy]
    resources :rewards, only: [:create, :show]
    resources :backings, only: [:create, :show]
    resources :categories, only: [:show, :index]

    get '/search', to: 'projects#search'
  end
end
