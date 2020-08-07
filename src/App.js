import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import Controls from "./Controls";
import LapList from "./LapList";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [lapList, setLapList] = useState([]);
  const [pause, setPause] = useState(true);

  let interval;

  useEffect(() => {
    if (running) {
      interval = setInterval(() => setTime((time) => time + 100), 100);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    console.log(lapList);
  }, [lapList]);

  const onStart = () => {
    setRunning(true);
    setPause(false);
  };

  const onPause = () => {
    setRunning(false);
    setPause(true);
  };

  const addLap = () => {
    setLapList([...lapList, time]);
  };

  const onReset = () => {
    setTime(0);
    setRunning(false);
    setLapList([]);
  };

  return (
    <div className="App">
      Hello StopWatch
      <Timer time={time}></Timer>
      <Controls
        running={running}
        pause={pause}
        onStart={onStart}
        onPause={onPause}
        addLap={addLap}
        onReset={onReset}
      />
      <LapList lapList={lapList}></LapList>
    </div>
  );
}

export default App;
