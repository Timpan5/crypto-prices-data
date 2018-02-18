import { call, takeLatest, select, put } from 'redux-saga/effects';
import { BEGIN_HISTORY_LOOKUP } from '../constants/historyConstants';
import { selectHistoryStart, selectHistoryEnd } from '../selectors/history';
import { priceHistoryLookup } from '../sources/historySources';

function* historyLookup() {
  try {
    const historyStart = yield select(selectHistoryStart);
    const historyEnd = yield select(selectHistoryEnd);

    const result = yield call(priceHistoryLookup, historyStart, historyEnd);
    
    debugger;

  } catch (error) {
    console.log('historyLookupSaga error: ', error);
  }
}

export function* historyLookupSaga() {
  yield takeLatest(BEGIN_HISTORY_LOOKUP, historyLookup);
}

export default historyLookupSaga;
