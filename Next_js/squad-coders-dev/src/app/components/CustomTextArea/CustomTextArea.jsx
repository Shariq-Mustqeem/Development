"use client";

import { Form, Input } from "antd";
import { memo } from "react";

function CustomTextArea({ children, className = "", ...restProps }) {
  return (
    <Input.TextArea
      className={`w-full h-[45px] custom-input-field ${className}`}
      placeholder={children}
      {...restProps}
    />
  );
}
export default memo(CustomTextArea);
