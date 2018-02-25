import axios from 'axios';

const BITFINEX_BASE_URL = 'https://api.bitfinex.com/v2/ticker/';
const BITTREX_BASE_URL = 'api/v1.1/public/getticker?market=';
const POLONIEX_BASE_URL = 'https://poloniex.com/public?command=returnTicker';
const HITBTC_BASE_URL = 'api/2/public/ticker/';
const OKEX_BASE_URL = 'api/v1/ticker.do?symbol=';

export function getPriceFromBitfinex(ticker) {
  const url = `${BITFINEX_BASE_URL}${ticker}`;
  return axios.get(url);
}

export function getPriceFromBittrex(market) {
  const url = `${BITTREX_BASE_URL}${market}`;
  return axios.get(url);
}

export function getPriceFromPoloniex() {
  const url = POLONIEX_BASE_URL;
  return axios.get(url);
}

export function getPriceFromHitbtc(ticker) {
  const url = `${HITBTC_BASE_URL}${ticker}`;
  return axios.get(url);
}

export function getPriceFromOKEx(ticker) {
  const url = `${OKEX_BASE_URL}${ticker}`;
  return axios.get(url);
}
