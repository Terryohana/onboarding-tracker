import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Actions from '../../actions';
import { Task, User } from '../../components';
import { ReduxState } from '../../store';
import { Block, Content, Subtitle, Title, TrackerStyle } from './style';

export const Tracker = () => {

  const { userId } = useParams<{userId?: string}>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((store: ReduxState) => store.app.users);
  const tasks = useSelector((store: ReduxState) => store.app.tasks);
  const error = useSelector((store: ReduxState) => store.app.error);

  useEffect(() => {
    if (!userId && users.length > 0) {
      navigate(`/user/${users[0].id}`);
    }
  }, [userId, users, navigate]);

  const currentUserTasks = useMemo(() => tasks.filter((task) => task.userId.toString() === userId), [tasks, userId]);

  if (error) {
    return <h1>An error occured: {error}</h1>;
  }

  return <TrackerStyle>
    <Title>Onboarding tracker</Title>
    <Content>
      <Block>
        <Subtitle>Users</Subtitle>
        {users.map((user) => <Link key={user.id} to={`/users/${user.id}`}>
          <User
            title={`User ${user.id}`}
            isActive={userId === user.id.toString()}
          />
        </Link>)}
      </Block>
      <Block>
        <Subtitle>Task list</Subtitle>
        {currentUserTasks.map((task) => task.completed === false ? <Task
          key={task.id}
          title={task.title}
          onComplete={() => dispatch(Actions.App.completeTask(task.id))}
        /> : <Task
          key={task.id}
          title={task.title}
          isCompleted
        />)}
      </Block>
    </Content>
  </TrackerStyle>;
}
