import React, { useEffect, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";

const App = () => {
  const [showTimer, toggleTimer] = useState(true);
  const content = "Hello ";

  return (
    <>
      {showTimer && <Timer content={content} />}
      <button onClick={() => toggleTimer((prv) => !prv)}>Remove timer</button>
    </>
  );
};

export default App;
