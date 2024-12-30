import React, { memo } from "react";

const CustomHeading = forwardRef(({ children, className = "", ...restProps }, ref) => {
    return (
        <div className={className} ref={ref} {...restProps}>
            <h1>{children}</h1>
        </div>
    );
});

export default memo(CustomHeading);
