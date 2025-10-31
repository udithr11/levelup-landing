"use client";
import React from "react";
// import instagram from "../../../public/footer/Instagram.svg";
// import facebook from "../../../public/footer/Facebook.svg";
// import linkedin from "../../../public/footer/Linkedin.svg";
// import Twitter from "../../../public/footer/Twitter.svg";
import logo from "../../../public/logo_black.svg";
import Image from "next/image";
import { regularText, smallText } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F4F6FA] pt-[4rem] pb-[2rem] sm:pt-[7rem] sm:pb-[3rem]">
        <div className="ProC2">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="sm:w-[35%]">
              <Image src={logo} alt="logo" className="pb-6 sm:pb-4" />
              <p className={`${smallText} `}>
                We empower Indian study abroad consultants with a seamless,
                end-to-end solution to secure admissions for students in top
                European universities.
              </p>
            </div>
            <div className="sm:w-[10%]">
              <p className={`${regularText} pt-8 sm:pt-2 pb-6`}>Quick Links</p>
              <div
                className={`flex flex-row justify-between sm:flex-col gap-4 ${smallText}`}
              >
                <a href="#aboutUs" className="hover:opacity-80">
                  About Us
                </a>
                <a href="#work" className="hover:opacity-80">
                  Features
                </a>
                <a href="#testimonials" className="hover:opacity-80">
                  Testimonials
                </a>
                <a href="#faq" className="hover:opacity-80">
                  FAQ
                </a>
              </div>
            </div>
            <div className={`sm:w-[28%] ${smallText} `}>
              <p className={`${regularText} text-black  pt-8 sm:pt-2 pb-6`}>
                Contact Us
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:info@europeanuniversities.in"
                  className="hover:opacity-80"
                >
                  Email: info@europeanuniversities.in
                </a>
                <a href={`tel:+370 (629) 67 807`}>
                  <div className="hover:opacity-80">
                    Lithuania: +370 (629) 67 807
                  </div>
                </a>
                <a href={`tel:+91 90485 14006`}>
                  <div className="hover:opacity-80">India: +91 90485 14006</div>
                </a>
              </div>
            </div>
            {/* <div className="sm:w-[18%]"> 
              <p className={`${regularText} text-black pt-8 sm:pt-2 pb-6`}>
                Social Media
              </p>
              <div className="flex flex-row gap-4">
                <a href="#" className="h-[40px] w-[40px]">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="#" className="h-[40px] w-[40px]">
                  <Image
                    src={Twitter}
                    alt="twitter"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="#" className="h-[40px] w-[40px]">
                  <Image
                    src={linkedin}
                    alt="linkedin"
                    className="hover:opacity-80"
                  />
                </a>
                <a href="#" className="h-[40px] w-[40px]">
                  <Image
                    src={instagram}
                    alt="instagram"
                    className="hover:opacity-80"
                  />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className={`text-center bg-[#204B9A] ${smallText} text-white p-4`}>
        © 2025 All Right Reserved | Powered by&nbsp;
        <span className="hover:text-[#FFFFFFCC]">
          <a href="https://www.procube.cx/">procube.cx</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
