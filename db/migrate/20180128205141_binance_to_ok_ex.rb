class BinanceToOkEx < ActiveRecord::Migration[5.1]
  def change
    rename_column :tickers, :binance, :okex
  end
end
