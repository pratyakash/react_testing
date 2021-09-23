import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import CongratComponent from './index';

import { findByTestAttr } from '../../../test/utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => shallow(<CongratComponent {...props} />);

test('congrats component render without crashing', () => {
  const shallowWrapper = setup();

  const component = findByTestAttr(shallowWrapper, 'component-congrats');

  expect(component.length).toBe(1);
});

test('congrats component render no message if `success` prop is false', () => {
  const shallowWrapper = setup({ success: false });

  const component = findByTestAttr(shallowWrapper, 'component-congrats');

  expect(component.text()).toBe('');
});

test('congrats component render non-empty message if `success` prop is true', () => {
  const shallowWrapper = setup({ success: true });

  const messageComponent = findByTestAttr(shallowWrapper, 'congrats-message');

  expect(messageComponent.text().length).not.toBe(0);
});
