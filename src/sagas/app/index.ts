import { takeEvery } from 'redux-saga/effects';
import Actions from '../../actions';
import { completeTaskSaga } from './complete-task';
import { loadSaga } from './load';

export function* appSaga() {
  yield takeEvery(Actions.App.Type.load, loadSaga);
  yield takeEvery(Actions.App.Type.completeTask, completeTaskSaga);
}
