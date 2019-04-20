Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :offers, only: [:index]
      resources :retailers, only: [:index]
      resources :retaileroffers, only: [:index]
    end
  end
  get 'home/index' => 'home#index'
  get 'api/v1/offers/:id' => 'api/v1/offers#show'
  get 'api/v1/retailers/:id' => 'api/v1/retailers#show'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
