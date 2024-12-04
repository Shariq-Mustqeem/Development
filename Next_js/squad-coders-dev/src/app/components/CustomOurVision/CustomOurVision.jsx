"use client";
import React from "react";
import CustomBorderLineText from "components/CustomBorderLineText/CustomBorderLineText";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { imageUrl } from "imageConstant/imageConstant";
import AnimationGsap from "src/app/gsap";

const CustomOurVision = () => {
  const { leftAnimation, rightAnimation } = AnimationGsap();
  return (
    <>
      <section>
        <div className="flex justify-between items-center w-[75%] mx-auto gap-[158px] mt-[60px]">
          <div className="w-[38%]" ref={leftAnimation}>
            <CustomBorderLineText src={imageUrl.arrow}>
              Our Vision
            </CustomBorderLineText>
            <CustomHeading className="text-3xl border-t border-gray-300 pt-4 text-purple-700">
              Our Target is Practical <br /> base Learning Approch
            </CustomHeading>
          </div>
          <div className="w-[55%]" ref={rightAnimation}>
            <CustomParagraph className="text-[15px]">
              Our vision is to teach you professional skills through practical
              projects and helping you to get good jobs and share our
              professional knowledge with you.
            </CustomParagraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomOurVision;
