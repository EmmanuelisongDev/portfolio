import React from "react";
import { useEffect, useState } from "react";

const Time = () => {
  const [timeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <span>{timeState}</span>
    </div>
  );
};

export default Time;
