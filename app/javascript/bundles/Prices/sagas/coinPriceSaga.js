import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { coinPriceUpdate } from '../actions/pricesActionCreators';
import { Map } from 'immutable';
import { bitcoinTickers, ethereumTickers } from '../constants/tickerConstants';
import { selectCurrentCoin } from '../selectors/coin';
import * as externalApi from './externalApi';

function chooseTicker(coin) {
  switch (coin) {
    case 'BTC':
      return bitcoinTickers;
    case 'ETH':
      return ethereumTickers;
    default:
      return bitcoinTickers;
  }
}

function* coinPrice(action) {
  try {
    const currentCoin = yield select(selectCurrentCoin);
    const currentTicker = chooseTicker(currentCoin);

    const bitfinexPrice = yield* externalApi.checkBitfinex(currentTicker);
    const bittrexPrice = yield* externalApi.checkBittrex(currentTicker);
    const poloniexPrice = yield* externalApi.checkPoloniex(currentTicker);
    const hitbtcPrice = yield* externalApi.checkHitbtc(currentTicker);
    const binancePrice = yield* externalApi.checkBinance(currentTicker);

    const pricesMap = new Map({
      Bitfinex: bitfinexPrice || null,
      Bittrex: bittrexPrice || null,
      Poloniex: poloniexPrice || null,
      Hitbtc: hitbtcPrice || null,
      Binance: binancePrice || null,
    })

    yield put(coinPriceUpdate(currentCoin, pricesMap));

  } catch (error) {
    console.log('coinPriceSaga error: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
