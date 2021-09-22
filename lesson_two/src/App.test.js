import App from './App';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without crashing', () => {
  const shallowWrapper = setup();

  const appComponent = findByTestAttr(shallowWrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {
  const shallowWrapper = setup();

  const buttonComponent = findByTestAttr(shallowWrapper, 'increment-button');

  expect(buttonComponent.length).toBe(1);
});

test('renders counter display', () => {
  const shallowWrapper = setup();

  const counterComponent = findByTestAttr(shallowWrapper, 'counter-display');

  expect(counterComponent.length).toBe(1);
});

test('counter display starts at 0', () => {
  const shallowWrapper = setup();

  const countComponent = findByTestAttr(shallowWrapper, 'counter-count');

  expect(countComponent.text()).toBe('0');
});

test('click button increament the counter', () => {
  const shallowWrapper = setup();

  const buttonComponent = findByTestAttr(shallowWrapper, 'increment-button');

  buttonComponent.simulate('click');

  const countComponent = findByTestAttr(shallowWrapper, 'counter-count');

  expect(countComponent.text()).toBe('1');
});
