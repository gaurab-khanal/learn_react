const child1 = React.createElement("p", {}, "I am a child");
const child2 = React.createElement("p", {}, "I am a child");

const div = React.createElement("div", { className: "text" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
