"use client";

import { Modal } from "antd";
import React, { memo } from "react";

function CustomModal({ children, ...restProps }) {
  return <Modal {...restProps}>{children}</Modal>;
}

export default memo(CustomModal);
