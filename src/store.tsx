import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combinedReducers, State } from './reducers';
import { Sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Sagas);

export type ReduxState = State;

export default Store;
