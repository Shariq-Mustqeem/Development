import React, { memo } from "react";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import AnimationGsap from "src/app/gsap";
import { contactDetails, menuItems, socialMediaLinks } from "src/constants";

const SocialMediaInformation = () => {
  const {
    imageRef,
    leftAnimation,
    topAnimation,
    rightAnimation,
    bottomAnimation,
  } = AnimationGsap();

  return (
    <section className="main-social-media-information relative mt-24">
      <div className="absolute w-full flex justify-end -top-16">
        <Image
          src={imageUrl.rightArrow}
          alt="Right Arrow"
          className="bg-cover"
          ref={imageRef}
        />
      </div>

      <div className="social-media-information flex flex-col md:flex-row justify-between gap-10 w-full max-w-7xl mx-auto mt-20">
        <div
          className="w-full md:w-[35%] ml-3 text-center md:text-left"
          ref={topAnimation}
        >
          <Image
            src={imageUrl.footerLogo}
            alt="Footer Logo"
            className="bg-cover mb-5 mx-auto md:mx-0"
          />
          <CustomParagraph className="text-sm leading-6">
            Our vision is to teach you professional skills through practical
            projects, helping you get good jobs, and sharing our professional
            knowledge with you.
          </CustomParagraph>
        </div>

        <div
          className="w-full md:w-[18%] custom-top-space text-center md:text-left"
          ref={leftAnimation}
        >
          <nav>
            <ul>
              <li className="font-semibold text-lg mb-3">Menu</li>
              {menuItems.map((item, index) => (
                <li key={index} className="mt-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="w-full md:w-[18%] custom-top-space text-center md:text-left"
          ref={bottomAnimation}
        >
          <nav>
            <ul>
              <li className="font-semibold text-lg mb-3">Social Media Links</li>
              {socialMediaLinks.map((link, index) => (
                <li key={index} className="mt-2 text-sm">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="w-full md:w-[38%] custom-top-space text-center md:text-left mr-6"
          ref={rightAnimation}
        >
          <nav>
            <ul>
              <li className="font-semibold text-lg mb-3">Reach Out to Us</li>
              {contactDetails.map((item, index) => (
                <div key={index} className="flex md:flex-row items-center mb-2">
                  <div className="mr-0 md:mr-2 mb-2 md:mb-0">{item.icon}</div>
                  <li className="text-sm">{item.text}</li>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default memo(SocialMediaInformation);
