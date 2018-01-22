import axios from 'axios';
import { List } from 'immutable';

const SEARCH_COIN_LIST_URL = '/search/list';
const SEARCH_COIN_URL = '/search/coin';

export function getCoinList(setCoinSearchOptions) {
  axios.get(SEARCH_COIN_LIST_URL).then((response) => {
    setCoinSearchOptions(new List(response.data));
  });
}

export function searchCoins(search) {
  axios.get(SEARCH_COIN_URL, {
    params: {
      search,
    }
  })
  .then((response) => {
    console.log(response);
  });
}
