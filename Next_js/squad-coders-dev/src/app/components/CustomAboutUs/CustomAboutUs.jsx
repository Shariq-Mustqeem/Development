"use client";
import React from "react";
import CustomBorderLineText from "components/CustomBorderLineText/CustomBorderLineText";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import AnimationGsap from "src/app/gsap";

const CustomAboutUs = () => {
  const { leftAnimation, bottomAnimation, rightAnimation, topAnimation } =
    AnimationGsap();
  return (
    <>
      <section>
        <div
          className="w-full flex justify-start mt-[60px] ml-[-20px] absolute"
          ref={leftAnimation}
        >
          <Image
            src={imageUrl.leftArrow}
            alt="rightArrow"
            className="bg-[length:100%_100%]"
          />
        </div>
        <div className="flex justify-between items-center w-[75%] mx-auto ml-[140px] gap-[130px]">
          <div className="w-[45%]" ref={topAnimation}>
            <Image
              src={imageUrl.among}
              alt="rightArrow"
              className="bg-[length:100%_100%] ml-[-30px] max-w-[110%]"
            />
          </div>
          <div className="w-[55%]">
            <div ref={rightAnimation}>
              <CustomBorderLineText src={imageUrl.arrow}>
                About Us
              </CustomBorderLineText>
              <CustomHeading className="text-3xl border-t border-gray-300 pt-4 text-purple-700">
                Why We Are the Best Among All
              </CustomHeading>
            </div>
            <div ref={bottomAnimation}>
              <CustomParagraph className="text-[14px] mt-[15px]">
                We are teaching how to code professionally in the web <br />{" "}
                development field by creating some practical projects like Web{" "}
                <br /> Admin Panels (WEBSITES WITH ADMIN PANELS, RESTAURANT{" "}
                <br /> MANGEMENT SYSTEMS), Mobile Apps and much more and now we{" "}
                <br /> have decided to launch that in market so if anyone wants
                to learn <br /> programming so you can easily contact us by our
                phone numbers, <br /> email or submitting website form.
              </CustomParagraph>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomAboutUs;
