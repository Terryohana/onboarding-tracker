import React from 'react';
import { useCallback } from 'react';
import { TaskStyle } from './style';

type Props = {
  title: string;
  isCompleted?: false;
  onComplete: () => void;
} | {
  title: string;
  isCompleted: true;
};

export const Task = (props: Props) => {

  const onChange = useCallback(() => props.isCompleted !== true ? props.onComplete() : undefined, [props]);

  return <TaskStyle
    isClickable={!props.isCompleted}
    onClick={onChange}
  >
    <input
      type='checkbox'
      disabled={props.isCompleted}
      checked={!!props.isCompleted}
      onChange={onChange}
    />
    <span>{props.title}</span>
  </TaskStyle>;
}
