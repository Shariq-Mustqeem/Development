"use client";

import CustomButton from "components/CustomButton/CustomButton";
import { constantImageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import React, { memo } from "react";
import AnimationGsap from "src/app/gsap";

const DevelopmentSkillsImages = () => {
  const { imageRef, topAnimation, leftAnimation } = AnimationGsap();

  return (
    <div>
      <section>
        <div className="skillsIcon w-[90%] mx-auto">
          {constantImageUrl?.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                className="custom-animation-one-by-one h-auto object-contain"
                alt={index}
              />
            );
          })}
        </div>
        <div className="w-[90%] mx-auto mt-8" ref={leftAnimation}>
          <CustomButton className="custom-white-button">
            Join us Today
          </CustomButton>
        </div>
      </section>
    </div>
  );
};

export default memo(DevelopmentSkillsImages);
