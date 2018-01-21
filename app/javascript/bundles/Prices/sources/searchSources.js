import axios from 'axios';

const SEARCH_COIN_LIST_URL = '/search/list';

export function getCoinList(setCoinSearchOptions) {
  axios.get(SEARCH_COIN_LIST_URL).then((response) => {
    setCoinSearchOptions(response.data);
  });
}
