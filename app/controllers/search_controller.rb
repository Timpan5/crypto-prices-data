class SearchController < ApplicationController
  def list
    @coins = CoinSearch.all.map do |coin|
      coin.to_json(only:['identifier'])
    end

    render :json => @coins
  end
end
