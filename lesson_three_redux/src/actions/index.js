import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const getSecretWord = () => {
	return axios.get("http://localhost:3030").then((response) => response.data);
};

export const actionTypes = {
	CORRECT_GUESS: 'correct_guess',
	GUESS_WORD: 'guess_word'
};

export const correctGuess = () => {
	return {
		type: actionTypes.CORRECT_GUESS,
	};
};

export const guessWord = (guessedWord) => {
	return function (dispatch, getState) {
		const secretWord = getState().secretWord;
		const count = getLetterMatchCount(guessedWord, secretWord);

		dispatch({
			type: actionTypes.GUESS_WORD,
			payload: { guessedWord, letterMatchCount: count }
		});

		if (guessedWord === secretWord) {
			dispatch({
				type: actionTypes.CORRECT_GUESS
			})
		}
	}
}