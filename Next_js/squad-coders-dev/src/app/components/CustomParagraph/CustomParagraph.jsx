import React, { forwardRef } from "react";

const CustomParagraph = forwardRef(
  ({ children, className = "", ...restProps }, ref) => {
    return (
      <p
        ref={ref}
        className={`${
          className ? className : "text-base font-inter text-paragraphColor"
        }`}
        {...restProps}
      >
        {children}
      </p>
    );
  }
);

export default CustomParagraph;
