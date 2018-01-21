import { combineReducers } from 'redux';
import { fromJS, Map, List } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';
import * as headerConstants from '../constants/headerConstants';

const MAX_CHART_DATA_POINTS = 25;

const initialPrices = fromJS({
  'BTC': [],
  'ETH': [],
});

const initialStoreState = new Map({
  currentCoin: 'BTC',
  prices: initialPrices,
  coinSearchOptions: new List(),
});

const coinPriceUpdate = (state, action) =>
  state.updateIn(['prices', action.coin], (list) =>
    list.size >= MAX_CHART_DATA_POINTS ? list.shift().push(action.pricesMap) : list.push(action.pricesMap));


const coinNameUpdate = (state, action) => (state.get('currentCoin') !== action.coinName) ?
  state.set('currentCoin', action.coinName).set('prices', initialPrices)
  : state;

const setCoinSearchOptions = (state, action) => state.set('coinSearchOptions', action.options);

const rootReducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case priceConstants.COIN_PRICE_UPDATE:
      return coinPriceUpdate(state, action);
    case headerConstants.COIN_NAME_UPDATE:
      return coinNameUpdate(state, action);
    case headerConstants.SET_COIN_SEARCH_OPTIONS:
      return setCoinSearchOptions(state, action);
    default:
      return state;
  }
};

export default rootReducer;
