import { shallow } from 'enzyme';

import InputComponent from './index';

import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
  secretWord: 'love',
};

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<InputComponent {...setupProps} />);
};

test('input component renders without error', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'component-input');

  expect(component.length).toBe(1);
});

test('input component do not throw error with expected props', () => {
  checkProps(InputComponent, defaultProps);
});
