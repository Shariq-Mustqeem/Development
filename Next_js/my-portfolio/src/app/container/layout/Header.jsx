"use client";
import CustomHeading from "@/app/components/CustomHeading/CustomHeading";
import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <header
        className="flex items-center bg-black text-white w-full h-[90px]"
        id="header"
      >
        <div className="container flex items-center justify-between">
          <CustomHeading
            fontSize="2.6vw"
            className="custom-transition-ease scale-hover font-semibold"
          >
            Muhammad <span className="text-custom-green">Shariq</span>
          </CustomHeading>
          <nav className="flex gap-6 text-[1.3vw]" id="nav-link">
            <li>
              <Link className="custom-nav-class">Home</Link>
            </li>
            <li>
              <Link className="custom-nav-class">Education</Link>
            </li>
            <li>
              <Link className="custom-nav-class">Skills</Link>
            </li>
            <li>
              <Link className="custom-nav-class">About</Link>
            </li>
            <li>
              <Link className="custom-nav-class">Contact</Link>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
