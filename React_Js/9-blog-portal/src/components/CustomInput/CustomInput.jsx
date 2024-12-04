import React, { memo } from "react";
import { Input } from "antd";

const CustomInput = ({ children, className = " ", ...restProps }) => (
    <Input className={className} placeholder={children} {...restProps} />
);

export default memo(CustomInput);
