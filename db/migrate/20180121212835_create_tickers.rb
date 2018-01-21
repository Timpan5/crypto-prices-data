class CreateTickers < ActiveRecord::Migration[5.1]
  def change
    create_table :tickers do |t|
      t.text :name
      t.text :identifier
      t.text :bitfinex
      t.text :bittrex
      t.text :poloniex
      t.text :hitbtc
      t.text :binance

      t.timestamps
    end
  end
end
