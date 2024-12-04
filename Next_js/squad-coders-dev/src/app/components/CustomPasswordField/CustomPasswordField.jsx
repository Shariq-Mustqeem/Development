"use client";

import { Input } from "antd";
import React, { memo } from "react";

function CustomPasswordField({ children, ...restProps }) {
  return (
    <Input.Password
      className="w-full h-[45px]"
      placeholder={children}
      {...restProps}
    />
  );
}

export default memo(CustomPasswordField);
