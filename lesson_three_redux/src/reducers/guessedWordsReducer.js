import { actionTypes } from '../actions';


export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            if (action.payload) {
                return [...state, action.payload]
            }

        default:
            return state;
    }
}