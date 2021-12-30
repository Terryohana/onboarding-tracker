import { action } from 'typesafe-actions';
import { Task } from '../types/task';
import { User } from '../types/user';

export enum Type {
  load = '[app] load',
  setUsers = '[app] set-users',
  setTasks = '[app] set-tasks',
  setError = '[app] set-error',
  completeTask = '[app] complete-task',
}

export const load = () => action(Type.load);
export const setError = (message: string) => action(Type.setError, { message });
export const setUsers = (users: User[]) => action(Type.setUsers, { users });
export const setTasks = (tasks: Task[]) => action(Type.setTasks, { tasks });
export const completeTask = (taskId: number) => action(Type.completeTask, { taskId });

export type Action =
  ReturnType<typeof load>
  | ReturnType<typeof setError>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTasks>
  | ReturnType<typeof completeTask>
;
