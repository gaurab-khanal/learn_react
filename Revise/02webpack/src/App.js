import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithToolTip";
import Input from "./Input";
import SecondParent from "./SecondParent";

// useref is used to reference value that isnt needed for re-rendering
// it can remember value during re-rerender

// topics
// store something that is needed in every rerender
// -> changing ref doesnot causes a re-render, ref has a memory that persists(holds) across various renders cycles
//
// perform dom manupulation
// pass ref to functional components (forward ref)

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCLick = () => {
    setCount((prv) => prv + 1);
    console.log("I am parent");
  };
  const handleCLick2 = () => {
    setCount2((prv) => prv + 1);
    console.log("I am parent2");
  };

  return (
    <>
      Outer most component: {count}{" "}
      <button onClick={handleCLick}>Count++</button>
      <br />
      Outer most component count2: {count2}{" "}
      <button onClick={handleCLick2}>Count++2</button>
      <br />
      <SecondParent count={count} />
    </>
  );
};

export default App;
