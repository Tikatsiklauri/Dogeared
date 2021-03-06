Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
      resources :reviews, only: [:show, :create, :update, :destroy]
    resources :shelves, only: [:index, :show, :create, :destroy]
    resources :shelvings, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
