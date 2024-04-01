import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Button from "./Button";

const Navbar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span>Home</span>
      <span>ABout Us</span>
      <Button clickHandler={() => console.log(theme)} />
      Theme2: {theme}
    </div>
  );
};

export default Navbar;
