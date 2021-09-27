import { actionTypes } from '../actions';

import successReducer from './successReducer';

test('when previous state is undefined, return false', () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
});

test('return previous state when action is unknown', () => {
    const newState = successReducer(false, { type: 'unknown' });

    expect(newState).toBe(false);
});

test('return True for CORRECT_GUESS', () => {
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });

    expect(newState).toBe(true);
});