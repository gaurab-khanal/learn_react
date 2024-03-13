import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";

const ButtonWithToolTip = ({ tooltipContent, children }) => {
  const [targetPosition, setTargetPosition] = useState(null);

  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    // gets the coordinates as rectangle
    const rect = btnRef.current.getBoundingClientRect();
    console.log(rect);
    setTargetPosition({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    });
  };

  return (
    <>
      <button
        ref={btnRef}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={() => {
          setTargetPosition(null);
        }}
      >
        {children} njdjsjdjsjd
      </button>
      {targetPosition && (
        <Tooltip targetPosition={targetPosition}>{tooltipContent}</Tooltip>
      )}
    </>
  );
};

export default ButtonWithToolTip;
