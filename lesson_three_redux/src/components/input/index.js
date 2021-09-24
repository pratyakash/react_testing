import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomInput = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter Guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

CustomInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default CustomInput;
