"use client";

import CustomBorderLineText from "components/CustomBorderLineText/CustomBorderLineText";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import React, { memo } from "react";
import AnimationGsap from "src/app/gsap";

const AboutUs = () => {
  const { imageRef, topAnimation, leftAnimation } = AnimationGsap();

  return (
    <>
      <section className="about-us mb-[60px]">
        <div className="flex justify-center items-center my-10">
          <div className="w-[90%] flex items-center justify-between">
            <div ref={topAnimation}>
              <CustomHeading src={imageUrl.arrow}>About Us</CustomHeading>
              <hr className="custom-light-hr mt-4 mb-4" />
              <CustomHeading className="text-3xl text-purple-700">
                Why We Are the Best Among All
              </CustomHeading>
            </div>
            <div>
              <Image
                className="max-w-[150px]"
                src={imageUrl.shapeRightArrow}
                alt="shapeRightArrow"
                ref={imageRef}
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto" ref={leftAnimation}>
          <CustomParagraph>
            We are teaching how to code professionally in the web development
            field by creating some practical projects like Web Admin Panels
            (WEBSITES WITH ADMIN PANELS, RESTAURANT MANAGEMENT SYSTEMS), Mobile
            Apps, and much more. We have decided to launch that in the market,
            so if anyone wants to learn programming, you can easily contact us
            by our phone numbers, email, or submitting the website form.
          </CustomParagraph>
        </div>
      </section>
    </>
  );
};

export default memo(AboutUs);
