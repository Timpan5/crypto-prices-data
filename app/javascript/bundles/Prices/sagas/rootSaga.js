import { all } from 'redux-saga/effects';
import coinPriceSaga from './coinPriceSaga';
import coinSearchSaga from './coinSearchSaga';
import historyLookupSaga from './historyLookupSaga';

export default function* rootSaga() {
  yield all([
    coinPriceSaga(),
    coinSearchSaga(),
    historyLookupSaga(),
  ]);
}
