export function selectCurrentCoin(state) {
  return state ? state.get('currentCoin') : 'BTC';
}

export function selectTickers(state) {
  return state.get('tickers', null);
}
