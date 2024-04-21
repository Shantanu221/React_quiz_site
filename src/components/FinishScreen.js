function FinishScreen({ points, maxPoints, dispatch }) {
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
