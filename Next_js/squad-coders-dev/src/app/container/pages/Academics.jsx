"use client";

import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import React, { memo } from "react";
import AnimationGsap from "src/app/gsap";

const Academics = () => {
  const { leftAnimation, topAnimation, rightAnimation } = AnimationGsap();

  return (
    <>
      <section className="academics-section mt-[40px]">
        <div className="w-full flex justify-start mt-[-42px] absolute ml-[-70px]">
          <Image src={imageUrl.leftArrow} alt="leftArrow" ref={leftAnimation} />
        </div>
        <div className="flex items-center w-[90%] mx-auto">
          <div ref={topAnimation}>
            <div className="flex items-center">
              <Image src={imageUrl.arrow} alt="arrow" className="mr-2 " />
              <CustomHeading className="text-2xl leading-[70px]">
                Academics
                <br />
              </CustomHeading>
            </div>
            <hr className="custom-light-hr" />
            <CustomHeading className="text-3xl pt-4 text-purple-700">
              Courses We Offer
            </CustomHeading>
          </div>
          <div className="ml-auto" ref={rightAnimation}>
            <CustomParagraph className="mt-4">View All Courses</CustomParagraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Academics);
