import React from "react";

import { useAppSelector } from "./redux/hooks";

const MyComp = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <div>
      <h2>Count in second Component : {count}</h2>
    </div>
  );
};

export default MyComp;
