import { checkPropTypes } from 'prop-types';
import { createStore, applyMiddleware } from 'redux';

import { middlewares } from '../src/store'

import rootReducer from '../src/reducers';

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
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
