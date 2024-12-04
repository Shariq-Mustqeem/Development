"use client";
import CustomHeading from "components/CustomHeading/CustomHeading";
import Image from "next/image";
import React, { memo } from "react";

const CustomBorderLineText = ({ children, src }) => {
  return (
    <>
      <div>
        <div className="flex items-center">
          <Image src={src} alt="arrow" className="mr-2 bg-[length:100%_100%]" />
          <CustomHeading className="text-2xl leading-[70px]">
            {children}
            <br />
          </CustomHeading>
        </div>
      </div>
    </>
  );
};

export default memo(CustomBorderLineText);
