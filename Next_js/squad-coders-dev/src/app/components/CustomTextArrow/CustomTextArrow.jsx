import CustomHeading from "components/CustomHeading/CustomHeading";
import Image from "next/image";
import React, { memo } from "react";

const CustomTextArrow = ({ src, children }) => {
  return (
    <>
      <div className="flex gap-3">
        <Image className="bg-[length:100%_100%]" src={src} alt="rightComp" />
        <CustomHeading className="text-white text-3xl">
          {children}
        </CustomHeading>
      </div>
    </>
  );
};

export default memo(CustomTextArrow);
