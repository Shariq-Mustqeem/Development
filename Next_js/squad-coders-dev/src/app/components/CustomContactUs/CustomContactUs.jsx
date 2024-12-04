"use client";
import React from "react";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomTextArrow from "components/CustomTextArrow/CustomTextArrow";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import AnimationGsap from "src/app/gsap";

const CustomContactUs = () => {
  const { leftAnimation, imageRef } = AnimationGsap();

  return (
    <>
      <section>
        <div className="background-image-contact h-[100vh] w-full bg-no-repeat bg-[length:108.5%_80.5%]">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div ref={leftAnimation}>
              <CustomTextArrow src={imageUrl.smallArrow}>
                <CustomHeading c44ssName=" text-[52px]">
                  Contact Us
                </CustomHeading>
              </CustomTextArrow>
            </div>
            <div ref={imageRef}>
              <Image
                className="bg-[length:100%_100%] mt-[104px] h-[62.5vh]"
                src={imageUrl.contactImage}
                alt="aboutMain"
                width={570}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomContactUs;
