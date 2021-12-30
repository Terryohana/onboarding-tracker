import React from 'react';
import { UserStyle } from './style';

interface Props {
  title: string;
  isActive: boolean;
}

export const User = (props: Props) => {
  return <UserStyle isActive={props.isActive}>
    {props.title}
  </UserStyle>;
}
