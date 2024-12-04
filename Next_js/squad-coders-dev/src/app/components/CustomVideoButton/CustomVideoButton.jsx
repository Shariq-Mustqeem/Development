import React from "react";
import { FaPlay } from "react-icons/fa6";
import AnimationGsap from "src/app/gsap";

const CustomVideoButton = ({ top }) => {
  const { topAnimation } = AnimationGsap();
  return (
    <>
      <div
        className="md:top-[32%] md:left-[46%] left-[47%] md:p-[20px] sm:p-[12px] p-[10px] absolute z-[1] bg-purple-500 rounded-[45px]"
        ref={topAnimation}
        style={{ top }}
      >
        <FaPlay className="text-white md:text-[25px] sm:text-[20] text-[15px]" />
      </div>
    </>
  );
};

export default CustomVideoButton;
