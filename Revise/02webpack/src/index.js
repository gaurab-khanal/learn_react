import React from "react";
import ReactDOM from "react-dom";

const child1 = React.createElement("p", {}, "I am a child");
const child2 = React.createElement("p", {}, "I am a child");

// const div = React.createElement("div", { className: "text" }, [child1, child2]);

const div = <div className="text">hello world</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
