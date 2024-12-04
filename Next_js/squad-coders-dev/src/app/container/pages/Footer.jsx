"use client";

import React, { memo } from "react";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import AnimationGsap from "src/app/gsap";

const Footer = () => {
  const { bottomAnimation } = AnimationGsap();
  return (
    <footer>
      <div className="w-full h-auto bg-[#453567] text-center pt-4 pb-4 text-white mt-10">
        <CustomParagraph className="text-[14px]" ref={bottomAnimation}>
          Copyright &copy; 2024 SquadCodersDev
        </CustomParagraph>
      </div>
    </footer>
  );
};

export default memo(Footer);
