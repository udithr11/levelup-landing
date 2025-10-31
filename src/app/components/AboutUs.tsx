import React from "react";
import Image from "next/image";
import img1 from "../../../public/vision/vision_img1.png";
import { largeText, smallText } from "../constants";
// import logo1 from "../../../public/vision/logo1.png";
// import logo2 from "../../../public/vision/logo2.png";
// import logo3 from "../../../public/vision/logo3.png";
// import logo4 from "../../../public/vision/logo4.png";
// import logo5 from "../../../public/vision/logo5.png";
// import logo6 from "../../../public/vision/logo6.png";

// const companyImages: (typeof logo1)[] = [
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
// ];

const AboutUs = () => {
  return (
    <div id="aboutUs" className=" pt-[4rem] sm:pt-[7rem]">
      {/* <div className="ProC2">
        <p className={`${smallText} text-center pb-6`}>
          We&apos;re proud to work with our preferred partners
        </p>
        <div className="hidden sm:flex justify-between pb-20 ">
          {companyImages.map((logo, index) => (
            <div className="w-[12.675vw] h-[5.417vw]" key={index}>
              <Image src={logo} alt={`brand${index}`} className="h-100 w-100" />
            </div>
          ))}
        </div>
      </div> */}
      {/* Mobile marquee */}
      {/* <div className="marquee-container w-full overflow-hidden relative md:hidden pb-10">
        <div className="marquee-wrapper flex">
          <div
            className="marquee-content flex animate-marquee"
            style={{
              width: "calc(100% * 6)", // Three sets of images
              animationDuration: "60s",
            }}
          >
            {[
              ...companyImages,
              ...companyImages,
              ...companyImages,
              ...companyImages,
              ...companyImages,
              ...companyImages,
              ...companyImages,
              ...companyImages,
            ].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[37.434666vw] mx-2 flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt={`Company ${(index % companyImages.length) + 1}`}
                  className="object-contain w-[140px] h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="ProC flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-[48%] order-2 sm:order-1 pt-8 sm:pt-0">
          <Image src={img1} alt="level up" />
        </div>
        <div className="sm:w-[46%]  order-1 sm:order-2">
          <h1 className={`${largeText} xl:pr-16`} data-aos="fade-up">
            India&apos;s #1 Platform for Overseas Study Abroad Consultants
          </h1>
          <div className="xl:pr-20">
            <p className={`${smallText} pt-6 pb-4`} data-aos="fade-up">
              We empower Indian study abroad consultants with a seamless,
              end-to-end solution to secure admissions for students in top
              European universities. Our innovative platform simplifies the
              entire process—from student profiling and application management
              to real-time tracking and visa support—ensuring your consultancy
              stays ahead in a competitive market.
            </p>
            <p className={smallText} data-aos="fade-up">
              We&apos;re dedicated to excellence and innovation, making us the
              trusted partner in delivering outstanding international education
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
