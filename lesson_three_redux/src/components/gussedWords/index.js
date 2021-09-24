import PropTypes from 'prop-types';

const GuessedWord = ({ guessedWords }) => {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secrect word !
      </span>
    );
  } else {
    const guessWordRows = guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Word</h3>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessWordRows}</tbody>
        </table>
      </div>
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
