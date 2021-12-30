import { combineReducers } from 'redux';
import * as App from './app';

export interface State {
  app: App.State;
}

export const initialState: State = {
  app: App.initialState,
};

export const combinedReducers = combineReducers<State>({
  app: App.reducer,
});
