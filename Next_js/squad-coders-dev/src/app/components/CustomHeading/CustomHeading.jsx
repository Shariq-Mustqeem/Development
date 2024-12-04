"use client";

import React, { forwardRef } from "react";

const CustomHeading = forwardRef(
  ({ children, className = "", ...restProps }, ref) => {
    return (
      <div
        className={`text-3xl font-inter text-paragraphColor3 ${className}`}
        ref={ref}
        {...restProps}
      >
        <h1>{children}</h1>
      </div>
    );
  }
);

export default CustomHeading;
