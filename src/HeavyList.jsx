import React from "react";

function HeavyList({ items, onHover }) {
  console.log(items);
  return (
    <>
      {items.length > 0 &&
        items.map((x) => (
          <div key={x} onMouseOver={onHover}>
            {x}
          </div>
        ))}
    </>
  );
}
export default React.memo(HeavyList);
//only rerender if props change or it's state change
