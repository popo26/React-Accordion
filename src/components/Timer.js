function Timer({ countdown, isTimerStarted, doneFirstQuiz }) {
  return (
    <div className="timer-div">
      {isTimerStarted ? (
        <h2 className="timer">{countdown}</h2>
      ) : (
        doneFirstQuiz && <h2 className="timer">Times Up!</h2>
      )}
    </div>
  );
}

export default Timer;
