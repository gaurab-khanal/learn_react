import React, { useCallback } from "react";
import ThirdParent from "./ThirdParent";

const SecondParent = ({ count }) => {
  const handleChange = useCallback(() => {
    console.log("hey hey count is : ", count);
  }, [count]);

  return (
    <>
      I am second parent
      <ThirdParent handleChange={handleChange} />
    </>
  );
};

export default SecondParent;
