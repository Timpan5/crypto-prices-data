Rails.application.routes.draw do
  root 'prices#index'
  get 'search/list'
  get 'search/coin'
  get 'history/lookup'
end
