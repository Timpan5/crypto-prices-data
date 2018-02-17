import { combineReducers } from 'redux';
import { fromJS, List } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';
import * as headerConstants from '../constants/headerConstants';
import * as historyConstants from '../constants/historyConstants';

const MAX_CHART_DATA_POINTS = 25;

const initialPrices = fromJS({
  'BTC': [],
  'ETH': [],
});

const initialStoreState = fromJS({
  currentCoin: 'BTC',
  prices: initialPrices,
  coinSearchOptions: [],
  tickers: {},
  historyStart: {},
  historyEnd: {},
});

const coinPriceUpdate = (state, action) =>
  state.updateIn(['prices', action.coin], (list) =>
    list.size >= MAX_CHART_DATA_POINTS ? list.shift().push(action.pricesMap) : list.push(action.pricesMap));


const coinNameUpdate = (state, action) => (state.get('currentCoin') !== action.coinName) ?
  state.set('currentCoin', action.coinName).setIn(['prices', action.coinName], new List())
  : state;

const setCoinSearchOptions = (state, action) => state.set('coinSearchOptions', action.options);

const setTickers = (state, action) => state.set('tickers', action.tickers);

const setHistoryStartAttr = (state, action) => state.setIn(['historyStart', action.attr], action.value);

const setHistoryEndAttr = (state, action) => state.setIn(['historyEnd', action.attr], action.value);

const rootReducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case priceConstants.COIN_PRICE_UPDATE:
      return coinPriceUpdate(state, action);
    case headerConstants.COIN_NAME_UPDATE:
      return coinNameUpdate(state, action);
    case headerConstants.SET_COIN_SEARCH_OPTIONS:
      return setCoinSearchOptions(state, action);
    case headerConstants.SET_TICKERS:
      return setTickers(state, action);
    case historyConstants.SET_HISTORY_START_ATTR:
      return setHistoryStartAttr(state, action);
    case historyConstants.SET_HISTORY_END_ATTR:
      return setHistoryEndAttr(state, action);
    default:
      return state;
  }
};

export default rootReducer;
