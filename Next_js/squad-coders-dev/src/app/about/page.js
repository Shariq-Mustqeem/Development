"use client";
import React from "react";
import CustomAboutUs from "components/CustomAboutUs/CustomAboutUs";
import CustomOurVision from "components/CustomOurVision/CustomOurVision";
import CustomGlimpseOfPrevious from "components/CustomGlimpseOfPrevious/CustomGlimpseOfPrevious";
import CustomMainAboutUs from "components/CustomMainAboutUs/CustomMainAboutUs";

const page = () => {
  return (
    <>
      <CustomMainAboutUs />
      <CustomAboutUs />
      <CustomOurVision />
      <CustomGlimpseOfPrevious />
    </>
  );
};

export default page;
