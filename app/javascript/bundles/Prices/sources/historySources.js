import axios from 'axios';

const PRICE_HISTORY_URL = '/history/lookup';

export function priceHistoryLookup(start, end) {
  return axios.get(PRICE_HISTORY_URL, {
    params: {
      start: start.toObject(),
      end: end.toObject(),
    }
  });
}
