"use client";
import CustomHeading from "components/CustomHeading/CustomHeading";
import Image from "next/image";
import React, { memo } from "react";

const CustomBorderLineTextWhite = ({ children, src, className }) => {
  return (
    <>
      <div className="flex items-center mt-2">
        <Image src={src} alt="arrow" className="mr-2 bg-[length:100%_100%]" />
        <CustomHeading
          className={`md:text-2xl text-[1.2rem] leading-[70px] text-white ${className}`}
        >
          {children}
        </CustomHeading>
      </div>
    </>
  );
};

export default memo(CustomBorderLineTextWhite);
