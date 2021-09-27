import axios from 'axios';

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

  }
}