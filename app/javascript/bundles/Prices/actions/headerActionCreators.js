import * as headerConstants from '../constants/headerConstants';

export const coinNameUpdate = (coinName) => ({
  type: headerConstants.COIN_NAME_UPDATE,
  coinName,
});

export const setCoinSearchOptions = (options) => ({
  type: headerConstants.SET_COIN_SEARCH_OPTIONS,
  options,
});

export const beginCoinSearch = (search) => ({
  type: headerConstants.BEGIN_COIN_SEARCH,
  search,
});

export const setTickers = (tickers) => ({
  type: headerConstants.SET_TICKERS,
  tickers,
});
