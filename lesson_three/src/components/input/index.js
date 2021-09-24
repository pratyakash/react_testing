import PropTypes from 'prop-types';

const CustomInput = ({ secretWord }) => {
  return (
    <div data-test="component-input">
      <div></div>
    </div>
  );
};

CustomInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default CustomInput;
