import React from "react";

/* type Props = {
  children?: JSX.Element
} */

//const Scroll = (props: Props) => {
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
