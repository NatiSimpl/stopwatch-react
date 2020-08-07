import React from "react";

function Controls({ onStart, onPause, addLap, onReset, running, pause }) {
  return (
    <div>
      {running ? (
        <button onClick={onStart} disabled>
          Start
        </button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}

      {running ? (
        <button onClick={onPause}>Pause</button>
      ) : (
        <button onClick={onPause} disabled>
          Pause
        </button>
      )}

      {running ? (
        <button onClick={addLap}>Lap</button>
      ) : (
        <button onClick={addLap} disabled>
          Lap
        </button>
      )}

      {!running && pause && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
export default Controls;
