import { combineReducers } from 'redux';

import successReducer from './successReducer';
import guessedWordReducer from './guessedWordsReducer';

export default combineReducers({
    successReducer,
    guessedWordReducer
})