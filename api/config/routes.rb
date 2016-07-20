Rails.application.routes.draw do
  root "students#index"
  get '/:name', to: 'students#show'

end

