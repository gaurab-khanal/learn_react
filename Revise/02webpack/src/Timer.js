import React, { useEffect, useState } from "react";
const Timer = ({ content }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      console.log("I am running ");
      setCounter((prv) => prv + 1);
    }, 1000);

    // clean up function will run for every unmounting of component
    // below is cleanup function which starts with return statement

    return () => {
      clearInterval(time);
      console.log("I was unmounted");
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("Content unmounted");
    };
  }, [content]);

  return (
    <>
      <span>Current time is: {counter}</span>
      <br />
      <span>{content}</span>
      <button>Start Timer</button>
    </>
  );
};

export default Timer;
