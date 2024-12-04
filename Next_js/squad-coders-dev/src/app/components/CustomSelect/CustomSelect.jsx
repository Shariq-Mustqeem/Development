"use client";

import { Select } from "antd";
import React, { memo } from "react";

function CustomSelect({ className = "", ...restProps }) {
  return <Select className={`custom-select ${className}`} {...restProps} />;
}

export default memo(CustomSelect);
