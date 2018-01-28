import { Map } from 'immutable';

export const bitcoinTickers = new Map ({
  Bitfinex: 'tBTCUSD',
  Bittrex: 'USDT-BTC',
  Poloniex: 'USDT_BTC',
  Hitbtc: 'BTCUSD',
  OKEx: 'BTC_USDT',
});

export const ethereumTickers = new Map ({
  Bitfinex: 'tETHUSD',
  Bittrex: 'USDT-ETH',
  Poloniex: 'USDT_ETH',
  Hitbtc: 'ETHUSD',
  OKEx: 'ETH_USDT',
});
