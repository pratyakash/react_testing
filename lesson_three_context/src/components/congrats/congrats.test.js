import { shallow } from 'enzyme';

import CongratComponent from './index';

import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
  success: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<CongratComponent {...setupProps} />);
};

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

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };

  checkProps(CongratComponent, expectedProps);
});
