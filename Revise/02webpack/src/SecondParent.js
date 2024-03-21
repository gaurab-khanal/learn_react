import React, { useCallback } from "react";
import ThirdParent from "./ThirdParent";

const SecondParent = () => {
  const myFunc = useCallback(() => {
    console.log("My function called");
  }, []);

  const handleChange = useCallback(() => {
    console.log("hey hey");
    myFunc();
  }, [myFunc]);

  return (
    <>
      I am second parent
      <ThirdParent handleChange={handleChange} />
    </>
  );
};

export default SecondParent;
