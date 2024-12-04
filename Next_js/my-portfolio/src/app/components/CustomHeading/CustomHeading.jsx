"use client";
import React, { memo } from "react";

function CustomHeading({ children, fontSize = "3.5vw", ...restProps }) {
  return (
    <div {...restProps}>
      <h2 style={{ fontSize }} className="text-white font-bold">
        {children}
      </h2>
    </div>
  );
}

export default memo(CustomHeading);
