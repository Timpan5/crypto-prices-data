Rails.application.routes.draw do
  root 'prices#index'
  get 'search/list'
end
