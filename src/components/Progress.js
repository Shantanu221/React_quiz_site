function Progress({ index, n, maxpoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={n} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index} / {n}
        </strong>{" "}
      </p>
      <p>
        <strong>{points}</strong> / {maxpoints}
      </p>
    </header>
  );
}

export default Progress;
