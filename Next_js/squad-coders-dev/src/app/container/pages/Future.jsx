"use client";

import CustomButton from "components/CustomButton/CustomButton";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import CustomTextArrow from "components/CustomTextArrow/CustomTextArrow";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import React, { memo } from "react";
import AnimationGsap from "src/app/gsap";

const Future = () => {
  const { imageRef, leftAnimation, topAnimation } = AnimationGsap();

  return (
    <section className="future-section background-image-dev h-[100vh] w-full bg-no-repeat mb-10">
      <div className="w-[90%] mx-auto flex items-center justify-center gap-[100px] pt-[120px]">
        <div className="flex flex-col items-start mt-[-85px] max-w-[560px]">
          <div ref={topAnimation}>
            <CustomTextArrow src={imageUrl.smallArrow}>
              <CustomHeading className="over-come text-[44px] md:text-[23px]">
                We help you overcome
              </CustomHeading>
            </CustomTextArrow>

            <CustomHeading className="software-heading mt-4 mb-2 text-white text-[44px] md:text-[35px] leading-[50px]">
              Future Challenges in
              <span className="md:block sm:inline inline">
                {" "}
                Software Engineering
              </span>
            </CustomHeading>

            <CustomParagraph className="text-white mt-4">
              Push your web development skills to the next level with experts
            </CustomParagraph>
          </div>
          <div ref={leftAnimation}>
            <CustomButton className="custom-purple-button text-[18px] md:text-[15px] mt-4">
              Browse Courses
            </CustomButton>
          </div>
        </div>

        <Image
          className="mt-[13px]"
          src={imageUrl.rightComp}
          alt="rightComp"
          width={560}
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default memo(Future);
