import React, { memo, forwardRef } from "react";
import { Button } from "antd";

const CustomButton = forwardRef(({ CustomButtonClass, style, children, className = "", ...restProps }, ref) => {
    return (
        <Button style={style} className={className} {...restProps} ref={ref}>
            {children}
        </Button>
    );
});

export default memo(CustomButton);
