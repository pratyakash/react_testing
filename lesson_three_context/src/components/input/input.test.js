import React from 'react';
import { shallow } from 'enzyme';

import InputComponent from './index';

import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
  secretWord: 'love',
  success: false,
};

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<InputComponent {...setupProps} />);
};

test('input component do not throw error with expected props', () => {
  checkProps(InputComponent, defaultProps);
});

describe('renders', () => {
  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('input component renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('input box not shown', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');

      expect(inputBox.exists()).toBe(false);
    });

    test('submit button not shown', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');

      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('input component renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('input box shown', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');

      expect(inputBox.exists()).toBe(true);
    });

    test('submit button shown', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');

      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe('input component state controlled input field', () => {
  let wrapper;
  let originalUseState = React.useState;

  beforeEach(() => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    originalUseState = React.useState;
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is reset after submit', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
