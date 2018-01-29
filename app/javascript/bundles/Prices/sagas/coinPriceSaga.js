import { call, select, put, take } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { coinPriceUpdate } from '../actions/pricesActionCreators';
import { Map } from 'immutable';
import { bitcoinTickers, ethereumTickers } from '../constants/tickerConstants';
import { selectCurrentCoin, selectTickers } from '../selectors/coin';
import * as externalApi from './externalApi';

function chooseTicker(coin) {
  switch (coin) {
    case 'BTC':
      return bitcoinTickers;
    case 'ETH':
      return ethereumTickers;
  }
}

function* coinPrice(action) {
  try {
    const currentCoin = yield select(selectCurrentCoin);
    const currentTicker = chooseTicker(currentCoin) || (yield select(selectTickers));

    const bitfinexPrice = yield* externalApi.checkBitfinex(currentTicker);
    const bittrexPrice = yield* externalApi.checkBittrex(currentTicker);
    const poloniexPrice = yield* externalApi.checkPoloniex(currentTicker);
    const hitbtcPrice = yield* externalApi.checkHitbtc(currentTicker);
    const OKExPrice = yield* externalApi.checkOKEx(currentTicker);

    const pricesMap = new Map({
      Bitfinex: bitfinexPrice || null,
      Bittrex: bittrexPrice || null,
      Poloniex: poloniexPrice || null,
      Hitbtc: hitbtcPrice || null,
      OKEx: OKExPrice || null,
    })

    yield put(coinPriceUpdate(currentCoin, pricesMap));

  } catch (error) {
    console.log('coinPriceSaga error: ', error);
  }
}

export function* coinPriceSaga(action) {
  while (true) {
    const action = yield take(FETCH_COIN_PRICE);
    yield call(coinPrice, action);
  }
}

export default coinPriceSaga;
