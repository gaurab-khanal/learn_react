import React, { memo } from "react";

const Text = memo(({ children }) => {
  console.log(children);
  return <div>{children} hshd</div>;
});
export default Text;
