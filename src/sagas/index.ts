import { fork } from 'redux-saga/effects';

import { appSaga } from './app';

export function* Sagas() {
  yield fork(appSaga);
}
