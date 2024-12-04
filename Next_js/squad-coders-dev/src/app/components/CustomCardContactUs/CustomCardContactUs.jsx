"use client";
import React from "react";
import CustomContactCard from "components/CustomContactCard/CustomContactCard";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import { contactData } from "src/constants";
import AnimationGsap from "src/app/gsap";

const CustomCardContactUs = () => {
  const { imageRef, leftAnimation, rightAnimation, topAnimation } =
    AnimationGsap();

  return (
    <>
      <section>
        <Image
          ref={topAnimation}
          src={imageUrl.leftArrow}
          alt="rightArrow"
          className="absolute mt-[60px]"
        />
        <div>
          <div className="custom-animation-one-by-one flex justify-around w-[80%] mx-auto">
            {contactData.map((contact, index) => (
              <CustomContactCard
                key={index}
                imageSrc={contact.imageSrc}
                title={contact.title}
                details={contact.details}
                color={contact.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomCardContactUs;
