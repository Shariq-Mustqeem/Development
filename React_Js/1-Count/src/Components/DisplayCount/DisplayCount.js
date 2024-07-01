import React from "react";

function DisplayCount(props) {
  const { count } = props;
  return (
    <div>
      <h2>Count : {count}</h2>
    </div>
  );
}

export default DisplayCount;
