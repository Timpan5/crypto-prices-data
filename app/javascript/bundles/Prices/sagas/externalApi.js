import { call } from 'redux-saga/effects';
import { getPriceFromBitfinex, getPriceFromBittrex, getPriceFromPoloniex, getPriceFromHitbtc, getPriceFromOKEx }
  from '../sources/priceSources';
import { roundToTwoDecimals } from '../utils/parsePriceString';

export function* checkBitfinex(currentTicker) {
  try {
    const bitfinex = yield call(getPriceFromBitfinex, currentTicker.get('Bitfinex'));
    return roundToTwoDecimals(bitfinex.data[6]);
  } catch(error) {
    console.log('checkBitfinex error: ', error);
    return null;
  }
}

export function* checkBittrex(currentTicker) {
  try {
    const bittrex = yield call(getPriceFromBittrex, currentTicker.get('Bittrex'));
    return roundToTwoDecimals(bittrex.data.result.Last);
  } catch(error) {
    console.log('checkBittrex error: ', error);
    return null;
  }
}

export function* checkPoloniex(currentTicker) {
  try {
    const poloniex = yield call(getPriceFromPoloniex);
    return roundToTwoDecimals(poloniex.data[currentTicker.get('Poloniex')].last);
  } catch(error) {
    console.log('checkPoloniex error: ', error);
    return null;
  }
}

export function* checkHitbtc(currentTicker) {
  try {
    const hitbtc = yield call(getPriceFromHitbtc, currentTicker.get('Hitbtc'));
    return roundToTwoDecimals(hitbtc.data.last);
  } catch(error) {
    console.log('checkHitbtc error: ', error);
    return null;
  }
}

export function* checkOKEx(currentTicker) {
  try {
    const OKEx = yield call(getPriceFromOKEx, currentTicker.get('OKEx'));
    return roundToTwoDecimals(OKEx.data.ticker.last);
  } catch(error) {
    console.log('checkOKEx error: ', error);
    return null;
  }
}
