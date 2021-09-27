import { checkPropTypes } from 'prop-types';

import { createStore } from 'redux';

import rootReducer from '../src/reducers';

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};
