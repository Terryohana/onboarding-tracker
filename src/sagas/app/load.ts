import { put } from 'redux-saga/effects';
import Actions from '../../actions';
import { Task } from '../../types/task';
import { User } from '../../types/user';

export function* loadSaga() {
  try {
    const [users, tasks]: [User[], Task[]] = yield Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.ok ? res.json() : null),
      fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.ok ? res.json() : null),
    ]);
    if (!users || !tasks) {
      throw new Error('Can not load data');
    }
    yield put(Actions.App.setUsers(users));
    yield put(Actions.App.setTasks(tasks));
  } catch (error) {
    console.error(error);
    yield put(Actions.App.setError(error instanceof Error ? error.toString() : 'Unknown error'));
  }
}
