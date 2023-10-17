import React, { useCallback, useState } from "react";
import "./App.css";
import HeavyList from "./HeavyList";
function App() {
  const [number, setNumber] = useState(1000);
  const [enterValue, setEnterValue] = useState(1000);
  console.log("rerender app but not rerender list");
  const onHover = React.useCallback(() => {
    console.log("hover");
  }, []);
  // useCallback prevent recreate function again on every keystroke
  const arr = React.useMemo(
    () => new Array(enterValue).fill(null).map((x, index) => `items ${index}`),
    [enterValue]
  );
  // useMemo prevent call function again on every keystroke
  // memo component is cached base on its props
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setEnterValue(parseInt(number))}>OK</button>
      <HeavyList onHover={onHover} items={arr || []} />
    </div>
  );
}

export default App;
