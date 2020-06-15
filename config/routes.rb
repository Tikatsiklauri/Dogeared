Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:index, :show]
    resources :shelves, only: [:index, :show, :create, :destroy, :update]
    post '/shelving_book', to: 'shelves#shelving_book'
  end
  
  root to: 'static_pages#root'
end
