Rails.application.routes.draw do
  root "students#index"
  get '/students', to: 'students#index'
  get '/students/:id/badges', to: 'badges#index'
  get '/students/:id', to: 'students#show'
  post '/badges', to: 'badges#new'
  patch '/badges', to: 'badges#update'
end

