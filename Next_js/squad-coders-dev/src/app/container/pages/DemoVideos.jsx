"use client";

import CustomHeading from "components/CustomHeading/CustomHeading";
import Image from "next/image";
import React, { memo } from "react";
import { imageUrl } from "imageConstant/imageConstant";
import CustomBorderLineTextWhite from "components/CustomBorderLineTextWhite/CustomBorderLineTextWhite";
import CustomSettingImage from "components/CustomSettingImage/CustomSettingImage";
import { FaPlay } from "react-icons/fa6";
import AnimationGsap from "src/app/gsap";
import CustomVideoButton from "components/CustomVideoButton/CustomVideoButton";

const DemoVideos = () => {
  const { imageRef, leftAnimation, rightAnimation } = AnimationGsap();

  return (
    <section className="demo-videos-section">
      <div className="flex justify-end mt-10" ref={imageRef}>
        <Image src={imageUrl.rightArrow} alt="rightArrow" />
      </div>
      <div>
        <div className="h-shape h-auto">
          <div className="md:pt-[70px] pt-[40px] w-[88%] mx-auto flex items-center justify-between z-10">
            <div ref={leftAnimation}>
              <CustomBorderLineTextWhite
                src={imageUrl.smallArrow}
                className="text-[clamp(1rem, 1.5vw + 0.3rem, 1.6rem)]"
              >
                In Action
              </CustomBorderLineTextWhite>
              <hr className="custom-hr mt-5" />
              <CustomHeading className="demo-video-heading mt-[0px] text-3xl pt-4 text-white">
                Html/Css Demo Classes
              </CustomHeading>
            </div>

            <div
              className="demo-vide-images mt-[35px] max-w-[60px]"
              ref={rightAnimation}
            >
              <CustomSettingImage src={imageUrl.setting} />
            </div>
          </div>

          <div className="w-[88%] mx-auto relative md:m-[40px] m-[30px] text-[clamp(1rem, 2vw + 1rem, 2rem)]">
            <CustomVideoButton />
            <Image
              className="w-full h-auto object-contain md:mt-[25px] mt-7"
              src={imageUrl.videoImg}
              alt="videoImg"
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(DemoVideos);
