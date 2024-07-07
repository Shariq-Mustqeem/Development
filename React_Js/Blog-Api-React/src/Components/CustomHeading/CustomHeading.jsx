import React, { memo } from "react";

function CustomHeading({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <h2>{children}</h2>
    </div>
  );
}

export default memo(CustomHeading);
