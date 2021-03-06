import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  return (
    <div
      data-test="component-congrats"
      className={success ? 'alert alert-success' : undefined}
    >
      {success ? (
        <span data-test="congrats-message">Congrats ! Successfull</span>
      ) : null}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
