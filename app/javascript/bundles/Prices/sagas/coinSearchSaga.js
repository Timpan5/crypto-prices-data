import { call, takeLatest, select, put } from 'redux-saga/effects';
import { BEGIN_COIN_SEARCH } from '../constants/headerConstants';
import { searchCoins } from '../sources/searchSources';
import { coinNameUpdate, setTickers } from '../actions/headerActionCreators';
import { Map } from 'immutable';


function* updateNameAndTickers(data) {
  try {
    const tickers = new Map({
      Bitfinex: data.bitfinex,
      Bittrex: data.bittrex,
      Poloniex: data.poloniex,
      Hitbtc: data.hitbtc,
      Binance: data.binance,
    });

    yield put(setTickers(tickers));
    yield put(coinNameUpdate(data.name));
  } catch (error) {
    console.log('updateNameAndTickers error: ', error);
  }
}

function* coinSearch(action) {
  try {
    const result = yield call(searchCoins, action.search);
    const data = result.data;

    if (data) {
      yield* updateNameAndTickers(data);
    }

  } catch (error) {
    console.log('coinSearchSaga error: ', error);
  }
}

export function* coinSearchSaga() {
  yield takeLatest(BEGIN_COIN_SEARCH, coinSearch);
}

export default coinSearchSaga;
