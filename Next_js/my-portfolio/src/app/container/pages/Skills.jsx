"use client";

import React from "react";
import CustomHeading from "@/app/components/CustomHeading/CustomHeading";
import CustomSkillCard from "@/app/components/CustomSkillsCard/CustomSkillsCard";

const Skill = () => {
  return (
    <section
      id="skills"
      className="bg-custom-light-black w-full h-[120vh] text-white"
    >
      <div className="container h-[55vw]">
        <h1 className="text-center text-[4vw] font-bold pt-8 text-sky-400">
          <CustomHeading> My Skills</CustomHeading>
        </h1>
        <div className="flex justify-between mt-10">
          <div className="flex flex-col gap-4 w-[24vw]">
            <CustomSkillCard percent={99}>HTML CSS</CustomSkillCard>
            <CustomSkillCard percent={85}>JavaScript</CustomSkillCard>
            <CustomSkillCard percent={80}>
              Object Oriented Programming (OOP)
            </CustomSkillCard>
            <CustomSkillCard percent={90}>React JS</CustomSkillCard>
            <CustomSkillCard percent={80}>Next JS</CustomSkillCard>
          </div>
          <div className="flex flex-col gap-4 w-[24vw]">
            <CustomSkillCard percent={86}>
              Responsive Web Design
            </CustomSkillCard>
            <CustomSkillCard percent={90}>Tailwind CSS</CustomSkillCard>
            <CustomSkillCard percent={90}>Bootstrap</CustomSkillCard>
            <CustomSkillCard percent={90}>Ant Design</CustomSkillCard>
            <CustomSkillCard percent={70}>Material UI</CustomSkillCard>
          </div>
          <div className="flex flex-col gap-4 w-[24vw]">
            <CustomSkillCard percent={70}>Redux</CustomSkillCard>
            <CustomSkillCard percent={72}>Redux Toolkit</CustomSkillCard>
            <CustomSkillCard percent={65}>Redux Thunk</CustomSkillCard>
            <CustomSkillCard percent={60}>GSAP</CustomSkillCard>
            <CustomSkillCard percent={95}>Github</CustomSkillCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
