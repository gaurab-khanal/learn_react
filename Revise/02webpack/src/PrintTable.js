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

const PrintTable = ({ num }) => {
  //   const table = generateTable(num);

  const table = useMemo(() => generateTable(num), [num]);

  console.log(table);

  return <div>{table.map((item) => item)}</div>;
};

export default PrintTable;
