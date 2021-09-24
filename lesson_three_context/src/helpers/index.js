export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secrectLetters = secretWord.split('');
  const gussedLetterSet = new Set(guessedWord);

  return secrectLetters.filter((letter) => gussedLetterSet.has(letter)).length;
};
