import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

export default function getStore(dev) {
  const sagaMiddleware = createSagaMiddleware();
  const store = dev && window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()))
    : createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
