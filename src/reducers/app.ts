
import * as Action from '../actions/app';
import { Task } from '../types/task';
import { User } from '../types/user';

export interface State {
  users: User[];
  tasks: Task[];
  error?: string;
}

export const initialState: State = {
  users: [],
  tasks: [],
};

export const reducer = (state: State = initialState, action: Action.Action): State => {

  switch (action.type) {

    case Action.Type.setUsers: {
      return {
        ...state,
        users: action.payload.users,
      };
    }

    case Action.Type.setTasks: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }

    case Action.Type.setError: {
      return {
        ...state,
        error: action.payload.message || 'Undefined error',
      };
    }

    case Action.Type.completeTask: {
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload.taskId ? { ...task, completed: true } : task),
      };
    }

    default: return state;
  }
};
