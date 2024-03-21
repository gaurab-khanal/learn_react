import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithToolTip";
import Input from "./Input";
import SecondParent from "./SecondParent";
import PrintTable from "./PrintTable";

// useref is used to reference value that isnt needed for re-rendering
// it can remember value during re-rerender

// topics
// store something that is needed in every rerender
// -> changing ref doesnot causes a re-render, ref has a memory that persists(holds) across various renders cycles
//
// perform dom manupulation
// pass ref to functional components (forward ref)

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      Counter1: {count1}
      <button onClick={() => setCount1((prv) => prv + 1)}>Increase c1</button>
      Counter1: {count2}
      <button onClick={() => setCount2((prv) => prv + 1)}>Increase c2</button>
      <br />
      <PrintTable num={count1} />
    </>
  );
};

export default App;
