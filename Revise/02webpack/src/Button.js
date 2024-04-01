import React, { memo, useContext } from "react";
import { ThemeContext } from "./context";

const Button = ({ clickHandler }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log("hello world");
  const handleClick = () => {
    setTheme((prv) => {
      return prv === "dark" ? "light" : "dark";
    });
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>
      <div>Theme: {theme}</div>
    </>
  );
};

export default Button;
