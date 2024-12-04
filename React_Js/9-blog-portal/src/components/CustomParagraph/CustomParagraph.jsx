import React, { forwardRef, memo } from "react";

const CustomParagraph = forwardRef(({ children, className = "", ...restProps }, ref) => {
    return (
        <p ref={ref} className={className} {...restProps}>
            {children}
        </p>
    );
});

export default memo(CustomParagraph);
