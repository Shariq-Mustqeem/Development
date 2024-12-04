"use client";

import React, { memo } from "react";
import { Checkbox } from "antd";

const onChange = (e) => {
  // console.log(`checked = ${e.target.checked}`);
};
const CustomCheckBox = ({ children, ...restProps }) => (
  <Checkbox onChange={onChange} {...restProps}>
    {children}
  </Checkbox>
);
export default memo(CustomCheckBox);
