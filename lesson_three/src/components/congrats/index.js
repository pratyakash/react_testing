const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success ? (
        <span data-test="congrats-message">Congrats ! Successfull</span>
      ) : null}
    </div>
  );
};

export default Congrats;
