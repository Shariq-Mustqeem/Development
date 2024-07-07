import { Input } from "antd";
import React, { memo } from "react";

function CustomInputPassword({ ...restProps }) {
  return (
    <Input.Password style={{ width: "100%", height: "37px" }} {...restProps} />
  );
}

export default memo(CustomInputPassword);
