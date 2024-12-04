"use client";
import React from "react";
import CustomBorderLineTextWhite from "components/CustomBorderLineTextWhite/CustomBorderLineTextWhite";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomSettingImage from "components/CustomSettingImage/CustomSettingImage";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import AnimationGsap from "src/app/gsap";
import CustomVideoButton from "components/CustomVideoButton/CustomVideoButton";

const CustomGlimpseOfPrevious = () => {
  const { imageRef, leftAnimation, rightAnimation } = AnimationGsap();
  return (
    <>
      <section>
        <div className="w-full flex justify-end mt-[60px]" ref={imageRef}>
          <Image
            src={imageUrl.rightArrow}
            alt="rightArrow"
            className="bg-[length:100%_100%]"
          />
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center h-[1000px] mt-[-60px]">
            <Image
              src={imageUrl.ShapePreviousSessions}
              alt="rightArrow"
              className="w-full h-full"
            />
            <CustomVideoButton top="42%" />
          </div>

          <div className="flex w-[85%] mx-auto">
            <div className="w-[85%] absolute top-0 mt-[70px]">
              <div className=" flex justify-between items-center ">
                <div ref={leftAnimation}>
                  <CustomBorderLineTextWhite src={imageUrl.smallArrow}>
                    In action
                  </CustomBorderLineTextWhite>

                  <CustomHeading className="text-3xl border-t border-gray-300 pt-4 text-white">
                    Glimpse of Previous Sessions
                  </CustomHeading>
                </div>

                <div className="mt-[30px]" ref={rightAnimation}>
                  <CustomSettingImage src={imageUrl.setting} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomGlimpseOfPrevious;
