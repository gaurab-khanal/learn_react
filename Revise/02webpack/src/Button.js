import React from "react";

const Button = () => {
  const clickHandler = () => {
    console.log("This is button");
  };

  return <div onClick={clickHandler}>Button</div>;
};

export default Button;
