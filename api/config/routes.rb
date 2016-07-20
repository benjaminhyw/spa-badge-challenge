Rails.application.routes.draw do
  root "students#index"
  get '/:name/badges', to: 'badges#index'
  get '/:name', to: 'students#show'

end

