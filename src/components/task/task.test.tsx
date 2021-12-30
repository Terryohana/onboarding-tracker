import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import { Task } from './task';

configure({ adapter: new Adapter() });

test('Component Task should match snapshot', () => {
  const component = shallow(<Task title='Title' isCompleted={false} onComplete={() => {}}/>);
  expect(component).toMatchSnapshot();
});

test('Component Task has checkbox and title', () => {
  const component = shallow(<Task title='Title' isCompleted={false} onComplete={() => {}}/>);
  expect(component.find('input[type="checkbox"]')).toHaveLength(1);
  expect(component.find('span')).toHaveLength(1);
});

test('Component Task has disabled checkbox if completed', () => {
  const component = shallow(<Task title='Title' isCompleted={true}/>);
  expect(component.find('input[type="checkbox"][disabled]')).toHaveLength(1);
});

test('Component Task calls onComplete', () => {
  const onComplete = jest.fn();
  const component = shallow(<Task title='Title' isCompleted={false} onComplete={onComplete}/>);
  component.simulate('click');
  expect(onComplete.mock.calls.length).toEqual(1);
});
