"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.svg";
import hamburger from "../../../public/hamburger.svg";
import close from "../../../public/close.svg";
import { buttonText, buttonWrapper } from "../constants";
import Image from "next/image";
// import { usePathname } from "next/navigation";

const Navbar = () => {
  // const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //disabling scroll when the mobile menu appers
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="ProC2 flex justify-between items-center  mt-3 sm:mt-6">
        <a href="/">
          <Image
            src={logo}
            alt="level up"
            className="w-[47.696vw] h-[10.666vw] md:w-[17.744vw] md:h-[3.9682vw]"
          />
        </a>

        <div className={`${buttonText} hidden md:flex  `}>
          <ul className="flex items-center md:space-x-8  lg:space-x-12">
            <li>
              <a href="#aboutUs" className={`hover:text-[#FFFFFFCC] `}>
                About Us
              </a>
            </li>
            <li>
              <a href="#chooseUs" className={`hover:text-[#FFFFFFCC] `}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#work" className={`hover:text-[#FFFFFFCC] `}>
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className={`hover:text-[#FFFFFFCC] `}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className={`hover:text-[#FFFFFFCC] `}>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className={`${buttonText} hidden md:flex space-x-14 `}>
          <li className="flex gap-5 items-center ">
            <div
              className={`button button-white ${buttonText} ${buttonWrapper} bg-[#4164A7] `}
            >
              <a href="https://partner.procubetech.com/">
                <span>login</span>
              </a>
            </div>
          </li>
        </div>

        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none text-white"
        >
          <Image
            src={hamburger}
            alt="menu-toggle"
            className="w-[8vw] h-[38px]"
          />
        </button>
      </div>

      <div
        className={`linearGradient text-[#0A183180] p-4 fixed right-0 top-0 w-full h-screen z-20 overflow-scroll transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src={logo}
              alt="level up"
              className="w-[47.696vw] h-[10.666vw] md:w-[17.744vw] md:h-[3.9682vw]"
            />
          </a>
          <Image
            src={close}
            alt="close"
            onClick={toggleMenu}
            className="h-[11.73vw] w-[11.73vw]"
          />
        </div>
        <ul className="flex flex-col  text-[5.93vw] leading-[8.06vw] font-light pt-[2rem] text-white">
          <li className="py-[1.25rem] border-b border-b-[#FFFFFF33] ">
            <a href="#aboutUs" onClick={toggleMenu}>
              ABOUT US
            </a>
          </li>
          <li className="py-[1.25rem] border-b border-b-[#FFFFFF33] ">
            <a href="#chooseUs" onClick={toggleMenu}>
              WHY US
            </a>
          </li>
          <li className="py-[1.25rem] border-b border-b-[#FFFFFF33] ">
            <a href="#work" onClick={toggleMenu}>
              FEATURES
            </a>
          </li>
          <li className="py-[1.25rem] border-b border-b-[#FFFFFF33] ">
            <a href="#testimonials" onClick={toggleMenu}>
              TESTIMONIALS
            </a>
          </li>
          <li className="py-[1.25rem] border-b border-b-[#FFFFFF33] ">
            <a href="#faq" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
