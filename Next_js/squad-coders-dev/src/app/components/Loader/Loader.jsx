"use client";

/* eslint-disable react/prop-types */
import { Spin } from "antd";

const Loader = ({ height = "h-screen" }) => (
  <div className={`${height} flex items-center justify-center`}>
    <Spin size="large" />
  </div>
);

export default Loader;
