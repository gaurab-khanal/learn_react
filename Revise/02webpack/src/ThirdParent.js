import React, { memo, useState } from "react";

const ThirdParent = memo(({ handleChange }) => {
  const [counter, setCounter] = useState(0);

  let startTime = performance.now();

  while (performance.now() - startTime < 1000) {
    // do nothing for 500ms
  }

  const increment = () => {
    setCounter((prv) => prv + 1);
    handleChange?.();
  };

  return (
    <>
      <br />
      I am a super super slow component
      <br />
      {counter}
      <br />
      <button onClick={increment}>Increment me</button>
    </>
  );
});

export default ThirdParent;
