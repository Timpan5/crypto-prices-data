class SearchController < ApplicationController
  def list
    coins = CoinSearch.all.map do |coin|
      coin.to_json(only:['identifier'])
    end

    render :json => coins
  end

  def coin
    search_term = params[:search]
    result = Ticker.find_by(name: search_term) || Ticker.find_by(identifier: search_term)

    render :json => result.to_json(only:['name', 'bitfinex', 'bittrex', 'poloniex', 'hitbtc', 'binance'])
  end
end
