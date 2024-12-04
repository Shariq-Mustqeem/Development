"use client";

import { Input } from "antd";
import { memo } from "react";

function CustomInput({
  children,
  className = " ",
  showDeleteIcon,
  handleInputDelete,
  ...restProps
}) {
  return (
    <Input
      className={`w-full h-[45px] ${className}`}
      placeholder={children}
      {...restProps}
    />
  );
}
export default memo(CustomInput);
