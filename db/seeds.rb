# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CoinSearch.destroy_all
CoinSearch.create(name: 'BTC', identifier: 'BTC - Bitcoin')
CoinSearch.create(name: 'ETH', identifier: 'ETH - Ethereum')
CoinSearch.create(name: 'ZEC', identifier: 'ZEC - Zcash')
CoinSearch.create(name: 'XMR', identifier: 'XMR - Monero')

Ticker.destroy_all
Ticker.create(name: 'BTC', identifier: 'BTC - Bitcoin', bitfinex: 'tBTCUSD', bittrex: 'USDT-BTC', poloniex: 'USDT_BTC', hitbtc: 'BTCUSD', binance: 'BTCUSDT')
Ticker.create(name: 'ETH', identifier: 'ETH - Ethereum', bitfinex: 'tETHUSD', bittrex: 'USDT-ETH', poloniex: 'USDT_ETH', hitbtc: 'ETHUSD', binance: 'ETHUSDT')
