import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "visible",
        border: "1px solid black",
        height: "8oopx"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
