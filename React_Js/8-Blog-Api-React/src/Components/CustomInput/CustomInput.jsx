import React, { memo } from "react";
import { Input } from "antd";

function CustomInput({ placeholder, onChange, name, ...restProps }) {
  return (
    <Input
      placeholder={placeholder}
      style={{ width: "100%", height: "37px" }}
      {...restProps}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
}

export default memo(CustomInput);
