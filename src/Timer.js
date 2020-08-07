import React from "react";
import { timeFormat } from "./Util";

function Timer(props) {
  // console.log(props);

  return (
    <div>
      <div> {timeFormat(props.time)}s</div>
    </div>
  );
}

export default Timer;
