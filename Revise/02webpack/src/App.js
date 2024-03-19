import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithToolTip";
import Input from "./Input";

// useref is used to reference value that isnt needed for re-rendering
// it can remember value during re-rerender

// topics
// store something that is needed in every rerender
// -> changing ref doesnot causes a re-render, ref has a memory that persists(holds) across various renders cycles
//
// perform dom manupulation
// pass ref to functional components (forward ref)

const App = () => {
  let myLocal = 0;
  console.log("myLocal: ", myLocal);
  const [show, setShow] = useState(true);
  const ref = useRef(0);
  const [myCount, setCount] = useState(0);

  console.log("ref.current: ", ref.current);

  const refInput = useRef();

  return (
    <>
      <button
        onClick={() => {
          myLocal += 1;
        }}
      >
        change local variable
      </button>
      <button
        onClick={() => {
          ref.current += 1;
        }}
      >
        change ref
      </button>
      <button
        onClick={() => {
          setCount((prv) => prv + 1);
        }}
      >
        change state
      </button>
      <button
        onClick={() => {
          setShow((prv) => !prv);
        }}
      >
        change show
      </button>

      <div>
        <span>Local var: {myLocal}</span> <br />
        <span>ref : {ref.current}</span> <br />
        <span>state variable : {myCount}</span> <br />
      </div>

      <br />

      <h4>Timer example</h4>

      {show && <Timer content={"Hello "} />}

      <h4>Dom example</h4>

      <Input ref={refInput} />
      <button
        onClick={() => {
          console.log(refInput);
          console.log(refInput.current.getBoundingClientRect());
          refInput.current.focus();
        }}
      >
        Focus input box
      </button>
    </>
  );
};

export default App;
