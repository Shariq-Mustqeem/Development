"use client";

import React from "react";
import { ReactSVG } from "react-svg";

const CustomSvg = ({ src, className, ...props }) => {
  return <ReactSVG src={src} className={className} {...props} />;
};

export default CustomSvg;
