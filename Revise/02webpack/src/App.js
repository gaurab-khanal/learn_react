import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";

const App = () => {
  const [data, setData] = useState([
    { id: "a", text: "text 1" },
    { id: "b", text: "text 2" },
    { id: "c", text: "text 3" },
    { id: "d", text: "text 4" },
  ]);

  const addMoreData = () => {
    setData((prevData) => [...prevData, { id: "f", text: "text5" }]);
  };

  return (
    <>
      {data.map((item, index) => (
        <Text key={item.id}>{item.text}</Text>
      ))}
      <Button clickHandler={addMoreData} />
    </>
  );
};

export default App;
