import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ children, targetPosition }) => {
  const { left, right, top, bottom } = targetPosition;
  const [tooTipHeight, setTooltipHeight] = useState(0);

  let x = 0;
  let y = 0;

  let now = performance.now();

  while (performance.now() - now < 1000) {
    // render blocking code
  }

  if (targetPosition !== null) {
    x = left;
    y = top - tooTipHeight;

    if (y < 0) {
      y = bottom;
    }
  }

  const tooltipRef = useRef(null);

  // useEffect runs after components mounts
  //but
  // useLayoutEffect
  // runs before compounts mounts and block component mounting till
  // its execution is completed
  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);

    console.log(height);
  }, []);

  return createPortal(
    <div
      ref={tooltipRef}
      className="tooltip"
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;
