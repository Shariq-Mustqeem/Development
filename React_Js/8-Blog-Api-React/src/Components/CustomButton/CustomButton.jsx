import React, { memo } from "react";
import { Button } from "antd";

function CustomButton({ style, children, ...restProps }) {
  return (
    <div>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          color: "#fff",
          // backgroundColor: "#67e71c",
          border: "none",
          borderColor: "#67e71c",
          height: "33px",
        }}
        {...restProps}
      >
        {children}
      </Button>
    </div>
  );
}

export default memo(CustomButton);
