CoinSearch.destroy_all
CoinSearch.create(name: 'BTC', identifier: 'BTC - Bitcoin')
CoinSearch.create(name: 'ETH', identifier: 'ETH - Ethereum')
CoinSearch.create(name: 'ZEC', identifier: 'ZEC - Zcash')
CoinSearch.create(name: 'XMR', identifier: 'XMR - Monero')

Ticker.destroy_all
Ticker.create(name: 'BTC', identifier: 'BTC - Bitcoin', bitfinex: 'tBTCUSD', bittrex: 'USDT-BTC', poloniex: 'USDT_BTC', hitbtc: 'BTCUSD', okex: 'BTC_USDT')
Ticker.create(name: 'ETH', identifier: 'ETH - Ethereum', bitfinex: 'tETHUSD', bittrex: 'USDT-ETH', poloniex: 'USDT_ETH', hitbtc: 'ETHUSD', okex: 'ETH_USDT')
Ticker.create(name: 'ZEC', identifier: 'ZEC - Zcash', bitfinex: 'tZECUSD', bittrex: 'USDT-ZEC', poloniex: 'USDT_ZEC', hitbtc: 'ZECUSD', okex: 'ZEC_USDT')
Ticker.create(name: 'XMR', identifier: 'XMR - Monero', bitfinex: 'tXMRUSD', bittrex: 'USDT-XMR', poloniex: 'USDT_XMR', hitbtc: 'XMRUSD', okex: 'XMR_USDT')
