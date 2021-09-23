import PropTypes from 'prop-types';

const GuessedWord = ({ guessedWords }) => {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secrect word !
      </span>
    );
  }

  return <div data-test="component-guessedword">{contents}</div>;
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
