import React from 'react';
import { shallow } from 'enzyme';

import InputComponent from './index';

import { findByTestAttr, checkProps } from '../../../test/utils';

const defaultProps = {
  secretWord: 'love',
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

test('input component renders without error', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'component-input');

  expect(component.length).toBe(1);
});

test('input component do not throw error with expected props', () => {
  checkProps(InputComponent, defaultProps);
});

describe('input component state controlled input field', () => {
  test('state updates with value', () => {
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();

    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
