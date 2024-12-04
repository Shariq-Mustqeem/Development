"use client";
import { Button } from "antd";
import React, { memo } from "react";

function CustomButton({ href = "", className, children, ...restProps }) {
  return (
    <a href={href}>
      <Button className={className} {...restProps}>
        {children}
      </Button>
    </a>
  );
}

export default memo(CustomButton);
