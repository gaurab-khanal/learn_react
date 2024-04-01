import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";

import Button from "./Button";
import Timer from "./Timer";
// import Text from "./Text.js";
import ButtonWithTooltip from "./ButtonWithToolTip";
import Input from "./Input";
import SecondParent from "./SecondParent";
import PrintTable from "./PrintTable";
import Loading from "./Loading.js";
import Heading from "./Heading.js";
import { ThemeContext } from "./context.js";
import Navbar from "./Navbar.js";

const Text = lazy(() => delayForDemo(import("./Text.js")));

// useref is used to reference value that isnt needed for re-rendering
// it can remember value during re-rerender

// topics
// store something that is needed in every rerender
// -> changing ref doesnot causes a re-render, ref has a memory that persists(holds) across various renders cycles
//
// perform dom manupulation
// pass ref to functional components (forward ref)

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Navbar />
    </ThemeContext.Provider>
  );
};

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
