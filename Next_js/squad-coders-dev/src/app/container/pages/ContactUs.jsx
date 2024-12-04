"use client";

import CustomBorderLineTextWhite from "components/CustomBorderLineTextWhite/CustomBorderLineTextWhite";
import CustomButton from "components/CustomButton/CustomButton";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomInput from "components/CustomInput/CustomInput";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import AnimationGsap from "src/app/gsap";
import { inputFields } from "src/constants";

const ContactUs = () => {
  const {
    imageRef,
    topAnimation,
    rightAnimation,
    leftAnimation,
    bottomAnimation,
  } = AnimationGsap();

  const pathname = usePathname();

  return (
    <>
      <section className="contact-us-section relative mt-12">
        <div className="w-10 md:mt-[0%] mt-[10%]" ref={imageRef}>
          <Image src={imageUrl.leftArrow} alt="LeftArrow" />
        </div>

        <div className="w-full h-contactShape relative">
          {pathname === "/contact" && (
            <div className="absolute w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4101.606571938574!2d67.056444460116!3d25.002143712127438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341feec05d03d%3A0x6bf112bd05ddca2b!2sSquad%20Coders%20Dev!5e0!3m2!1sen!2s!4v1727683942268!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}

          <div className="flex flex-col w-[90%] mx-auto mt-[-50px] mb-10">
            <div className="w-full mt-8 mb-12" ref={topAnimation}>
              <CustomBorderLineTextWhite src={imageUrl.smallArrow}>
                Contact Us
              </CustomBorderLineTextWhite>
              <hr className="custom-hr md:w-[300px] w-[253px] mt-4 mb-4" />
              <CustomHeading className="md:text-3xl text-[25px] text-white">
                Just Submit This Form
              </CustomHeading>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 gap-0 w-full">
              <div
                className="w-full md:w-[42%] custom-input-style"
                ref={leftAnimation}
              >
                {inputFields.map((field) => (
                  <CustomInput
                    key={field.label}
                    className="custom-animation-one-by-one"
                  >
                    {field.label}
                  </CustomInput>
                ))}
              </div>
              <div className="w-full md:w-[36%]" ref={rightAnimation}>
                <CustomTextArea className="pb-[210px] border-none rounded-none">
                  Contact
                </CustomTextArea>
              </div>
            </div>

            <div
              className="flex justify-center md:justify-start"
              ref={bottomAnimation}
            >
              <CustomButton className="custom-white-button w-[18%]">
                Contact Now
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ContactUs);
