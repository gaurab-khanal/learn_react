import React, { useEffect, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Timer from "./Timer";
import ButtonWithTooltip from "./ButtonWithToolTip";

const App = () => {
  return (
    <>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead! This tooltip does not fit
            above the button.
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </>
  );
};

export default App;
