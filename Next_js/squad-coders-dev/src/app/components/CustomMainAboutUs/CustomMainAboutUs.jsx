"use client";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomTextArrow from "components/CustomTextArrow/CustomTextArrow";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import AnimationGsap from "src/app/gsap";

const CustomMainAboutUs = () => {
  const { imageRef, leftAnimation } = AnimationGsap();

  return (
    <>
      <section>
        <div className="background-image-about h-[100vh] w-full bg-no-repeat bg-[length:124%_92%]">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="mt-[-50px]" ref={leftAnimation}>
              <CustomTextArrow src={imageUrl.smallArrow}>
                <CustomHeading className=" text-[40px]">About Us</CustomHeading>
              </CustomTextArrow>
            </div>
            <div ref={imageRef}>
              <Image
                className="bg-[length:100%_100%] mt-[126px] h-[70vh]"
                src={imageUrl.aboutMain}
                alt="aboutMain"
                width={560}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomMainAboutUs;
