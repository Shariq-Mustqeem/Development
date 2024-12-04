"use client";
// memo( CustomContactCard).jsx
import Image from "next/image";
import CustomHeading from "components/CustomHeading/CustomHeading";
import CustomParagraph from "components/CustomParagraph/CustomParagraph";
import { memo } from "react";
import AnimationGsap from "src/app/gsap";

const CustomContactCard = ({ imageSrc, title, details, color, className }) => {
  const { imageRef, rightAnimation, topAnimation, bottomAnimation } =
    AnimationGsap();
  return (
    <div
      className="flex justify-center items-center flex-col h-[400px] bg-white shadow-lg rounded-lg w-[440px] text-center"
      ref={imageRef}
    >
      <Image
        src={imageSrc}
        alt={title}
        className={className}
        width={150}
        ref={topAnimation}
      />
      <CustomHeading
        className={`text-[${color}] mt-4 mb-3`}
        ref={rightAnimation}
      >
        {title}
      </CustomHeading>
      {details.map((detail, index) => (
        <CustomParagraph
          key={index}
          className={`text-[${color}] mb-1`}
          ref={bottomAnimation}
        >
          {detail}
        </CustomParagraph>
      ))}
    </div>
  );
};

export default memo(CustomContactCard);
