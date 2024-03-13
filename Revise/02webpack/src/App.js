import React, { useCallback, useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [message, setMessage] = useState(0);

  const handleClick = useCallback(() => {
    setMessage((prevData) => {
      // console.log(prevData);
      return prevData + 1;
    });
  }, []);

  // console.log(message);

  return (
    <>
      <div>{message}</div>
      <Button clickHandler={handleClick} />
      {/* <button onClick={handleClick}>CHange message{message}</button> */}
    </>
  );
};

export default App;
