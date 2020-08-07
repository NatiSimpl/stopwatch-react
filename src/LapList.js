import React from "react";
import { timeFormat } from "./Util";

function LapList({ lapList }) {
  return (
    <div>
      {lapList.map((lap, index) => (
        <div key={lap}>
          Lap
          {index + 1} {timeFormat(lap)}
        </div>
      ))}
    </div>
  );
}

export default LapList;
