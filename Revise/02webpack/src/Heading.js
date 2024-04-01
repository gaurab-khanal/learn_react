import React from "react";
import Text from "./Text";

const Heading = ({ headingText }) => {
  return (
    <>
      I am Heading
      <Text externalData={headingText}>I am text component from Heading</Text>
    </>
  );
};

export default Heading;
