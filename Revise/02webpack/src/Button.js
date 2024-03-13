import React, { memo } from "react";

const Button = memo(({ clickHandler }) => {
  console.log("hello world");
  return <button onClick={clickHandler}>Button</button>;
});

export default Button;
