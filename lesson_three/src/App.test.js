import { shallow } from 'enzyme';

import App from './App';

import { findByTestAttr, checkProps } from '../test/utils';

const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();

  const app = findByTestAttr(wrapper, 'component-app');

  expect(app.length).toBe(1);
});
