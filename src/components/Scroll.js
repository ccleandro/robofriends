import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflow: "visible",
        border: "1px solid black",
        height: "8oopx"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
