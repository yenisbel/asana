Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :teams do
      resources :members
      resources :projects do
        resources :columns do
          resources :tasks
        end       
      end
    end 
  end
  if Rails.env.production?
    get '404', :to => 'application#page_not_found'
 end 
end
