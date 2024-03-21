import React, { useCallback, memo, useMemo } from "react";

const generateTable = (num) => {
  const arr = [];

  let startTime = performance.now();

  while (performance.now() - startTime < 1000) {}

  for (let i = 1; i <= 10; i++) {
    console.log(num);
    arr.push(<div>{num * i}</div>);
  }

  return arr;
};

// avoid passing arrays, object, non-primite data types as a props cause it will cause a rerender
const PrintTable = memo(({ num, val, arr }) => {
  const table = generateTable(num);

  //   const table = useMemo(() => generateTable(num), [num]);

  console.log(table);

  return (
    <div>
      {table.map((item) => item)}
      {/* {obj.channel} */}
      {arr?.map((item) => (
        <span>{item}</span>
      ))}
      {val}
    </div>
  );
});

export default PrintTable;
