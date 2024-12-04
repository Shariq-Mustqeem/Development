"use client";

import { Progress } from "antd";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const CustomSkillCard = ({ percent = 99, children }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      const progressBar = progressRef.current.querySelector(".ant-progress-bg");

      gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        {
          scaleX: percent / 100,
          duration: 0.3,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: progressBar,
            start: "top 80%",
            toggleActions: "play none play reset",
          },
        }
      );
    }
  }, [percent]);

  return (
    <div className="w-[22vw]" data-aos="fade-right">
      <h5>{children}</h5>
      <div className="animated-progress basis-[12vw]" ref={progressRef}>
        <Progress
          percent={percent}
          strokeColor="custom-green"
          trailColor="#f0f0f0"
          strokeWidth={10}
          showInfo={null}
        />
      </div>
    </div>
  );
};

export default CustomSkillCard;
