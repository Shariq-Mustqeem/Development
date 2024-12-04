"use client";
import ContactUs from "container/pages/ContactUs";
import Footer from "container/pages/Footer";
import Header from "container/pages/Header";
import SocialMediaInformation from "container/pages/socialMediaInformation";
import React, { memo } from "react";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ContactUs />
      <SocialMediaInformation />
      <Footer />
    </div>
  );
};

export default memo(LayoutComponent);
