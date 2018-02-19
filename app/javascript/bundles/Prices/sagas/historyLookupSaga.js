import { call, takeLatest, select, put } from 'redux-saga/effects';
import { BEGIN_HISTORY_LOOKUP } from '../constants/historyConstants';
import { selectHistoryStart, selectHistoryEnd } from '../selectors/history';
import { selectCurrentCoin } from '../selectors/coin';
import { priceHistoryLookup } from '../sources/historySources';
import { roundToTwoDecimals } from '../utils/parsePriceString';
import { setHistoryData } from '../actions/historyActionCreators';

function generateChartData(history) {
  return history.reduce((arr, current) => {
    const timestamp = current[0];
    const dateString = (new Date(timestamp * 1000))
      .toLocaleString({ locale: 'en-us' }, { month: 'long', day: 'numeric', year: 'numeric' });
    const price = roundToTwoDecimals(current[1]);
    arr.push({ timestamp, dateString, price });
    return arr;
  }, []);
}

function* historyLookup() {
  try {
    const currentCoin = yield select(selectCurrentCoin);
    const historyStart = yield select(selectHistoryStart);
    const historyEnd = yield select(selectHistoryEnd);

    const result = yield call(priceHistoryLookup, currentCoin, historyStart, historyEnd);
    result.data.success ? yield put(setHistoryData(generateChartData(result.data.history))) : alert(result.data.error);
  } catch (error) {
    console.log('historyLookupSaga error: ', error);
  }
}

export function* historyLookupSaga() {
  yield takeLatest(BEGIN_HISTORY_LOOKUP, historyLookup);
}

export default historyLookupSaga;
