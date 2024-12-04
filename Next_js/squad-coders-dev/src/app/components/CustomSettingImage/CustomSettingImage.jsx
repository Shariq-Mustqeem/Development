import Image from "next/image";
import React, { memo } from "react";

const CustomSettingImage = ({ src }) => {
  return (
    <>
      <Image
        src={src}
        alt="setting"
        className="spin h-auto bg-[length:100%_100%]"
      />
    </>
  );
};

export default memo(CustomSettingImage);
