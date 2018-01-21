import * as headerConstants from '../constants/headerConstants';

export const coinNameUpdate = (coinName) => ({
  type: headerConstants.COIN_NAME_UPDATE,
  coinName,
});

export const setCoinSearchOptions = (options) => ({
  type: headerConstants.SET_COIN_SEARCH_OPTIONS,
  options,
});
