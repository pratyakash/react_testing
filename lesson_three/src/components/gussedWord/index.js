import PropTypes from 'prop-types';

const GuessedWord = ({}) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

GuessedWord.propType = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWord;
