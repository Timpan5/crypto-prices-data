import axios from 'axios';
import { List } from 'immutable';

const SEARCH_COIN_LIST_URL = '/search/list';

export function getCoinList(setCoinSearchOptions) {
  axios.get(SEARCH_COIN_LIST_URL).then((response) => {
    setCoinSearchOptions(new List(response.data));
  });
}
