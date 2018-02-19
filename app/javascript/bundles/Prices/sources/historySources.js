import axios from 'axios';

const PRICE_HISTORY_URL = '/history/lookup';

export function priceHistoryLookup(coin, start, end) {
  return axios.get(PRICE_HISTORY_URL, {
    params: {
      coin,
      start: start.toObject(),
      end: end.toObject(),
    }
  });
}
