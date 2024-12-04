"use client";
import { imageUrl } from "imageConstant/imageConstant";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { navItems } from "src/constants";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Drawer } from "antd";
import AnimationGsap from "src/app/gsap";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const { imageRef, rightAnimation } = AnimationGsap();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const menuHandler = () => {
    setOpen(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`w-full h-[70px] px-4 sm:px-8 lg:px-[30px] py-[23px] flex justify-between items-center fixed top-0 z-[999] ${
          scroll ? "bg-[#603676]" : "bg-transparent"
        }`}
      >
        <div>
          <Image
            src={imageUrl.squadCoderDevLogo}
            alt="squadcodersdev"
            width={220}
            className="object-scale-down"
            ref={imageRef}
          />
        </div>

        <nav id="nav-header-section">
          <ul
            className="flex items-center gap-3 text-[14px] sm:text-[16px] text-white"
            ref={rightAnimation}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  onClick={() => setActive(item.label)}
                  className={`relative text-white p-2 sm:p-3 ${
                    active === item.label ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MdOutlineMenu id="menu-section" onClick={menuHandler} />
        <Drawer
          title={null}
          closable={false}
          headerStyle={{
            backgroundColor: "transparent",
            borderBottom: "none",
          }}
          placement={"top"}
          width={500}
          onClose={onClose}
          open={open}
          maskClosable={true}
        >
          <nav className={`flex justify-between w-full pr-4 items-center`}>
            <Link href="/">
              <Image
                src={imageUrl.squadCoderDevLogo}
                alt="Logo"
                className="scale-[1] transition-all duration-600 ease-in-out hover:scale-[1.1] hover:transition-all hover:duration-600 hover:ease-in-out"
              />
            </Link>
            <AiOutlineClose
              onClick={onClose}
              className=" fa-solid fa-x menu-icon text-[22px] text-white cursor-pointer"
            />
          </nav>
          <div className="nav">
            <ul className="flex flex-col gap-8 pt-6 pl-2 text-[20px]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    onClick={() => setActive(item.label)}
                    className={`relative text-white text-[1em] pb-2 ${
                      active === item.label ? "border-b-2 border-white" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </header>
    </>
  );
};

export default memo(Header);
