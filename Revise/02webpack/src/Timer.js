import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Timer = ({ content }) => {
  const [counter, setCounter] = useState(0);

  // this will run after browser is fully painted

  const time = useRef(null);
  // useRef returns one object called current

  useEffect(() => {
    time.current = setInterval(() => {
      console.log("I am running ");
      setCounter((prv) => prv + 1);
    }, 1000);

    console.log("Inside useEffect");
    // clean up function will run for every unmounting of component
    // below is cleanup function which starts with return statement

    return () => {
      clearInterval(time);
    };
  }, []);

  const stopTimer = () => {
    console.log("stop: ", time);
    clearInterval(time.current);
  };

  // it will run before browser paints
  // use this when you want to render something after calculating.
  // so that the calculated value to showup in the first paint as
  // useLayoutEffect will run before browser is painted.
  // if you dont use this then the uncalculated value will render on the first paint

  // it is used at a places where we want to calculate any element before the browser paints
  // helps us avoid lags and gatters in our applications

  return (
    <>
      <span>Current time is: {counter}</span>
      <br />
      <span>{content}</span>

      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
};

export default Timer;
