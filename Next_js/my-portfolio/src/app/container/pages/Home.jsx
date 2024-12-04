/* eslint-disable jsx-a11y/alt-text */
"use client";

import React, { useEffect, useRef } from "react";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import Typed from "typed.js";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import { imagesContants } from "@/app/utils/imagesContants";
import CustomHeading from "@/app/components/CustomHeading/CustomHeading";

function Home() {
  const spanRef = useRef(null);

  useEffect(() => {
    const type = new Typed(spanRef.current, {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "Mobile App Developer",
        "BackEnd Developer",
      ],

      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);
  return (
    <>
      <section
        className="flex items-center  w-full h-[87vh] bg-custom-black"
        id="home"
      >
        <div className="container flex items-center gap-[10vw]">
          <div>
            <CustomHeading>
              Hi ,Its <span>Shariq</span>
            </CustomHeading>
            <p className="text-[3vw] text-white font-bold">
              I am a <span className="text-custom-green" ref={spanRef}></span>
            </p>
            <p className="break-words text-[1.1vw] mt-4 mb-10 text-white font-medium leading-[30px]">
              As a Frontend Developer with 1 year of experience, I specialize in
              building responsive web applications using React.js and React
              Native. I am passionate about clean code, modern web practices,
              and delivering visually appealing, user friendly interfaces.
            </p>
            <div className="w-full flex gap-[15px]">
              <a href="" className="custom-icon ">
                <LinkedinFilled className="text-[1.5vw]" />
              </a>
              <a href="" className="custom-icon">
                <GithubFilled className="text-[1.5vw]" />
              </a>
              <a href="" className="custom-icon">
                <FacebookFilled className="text-[1.5vw]" />
              </a>
              <a href="" className="custom-icon">
                <InstagramFilled className="text-[1.5vw]" />
              </a>
            </div>
            <div className="flex">
              <CustomButton className="bg-custom-green text-white mr-5 px-7 py-5 text-xl font-semibold mt-7 border-none rounded-full">
                Hire me
              </CustomButton>
              <CustomButton className="bg-custom-green text-white mr-5 px-7 py-5 text-xl font-semibold mt-7 border-none rounded-full">
                Contact
              </CustomButton>
            </div>
          </div>
          <div className="w-[35vw] h-[63vh]">
            <div className="bg-custom-green w-[25vw] h-[25vw] rounded-[50%]">
              <Image src={imagesContants.pic} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
