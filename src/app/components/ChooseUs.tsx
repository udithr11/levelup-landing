"use client";
import React from "react";
import { largeText, mediumText, smallText } from "../constants";
import img1 from "../../../public/vision/choose1.png";
import img2 from "../../../public/vision/choose2.png";
import img3 from "../../../public/vision/choose3.png";
import img4 from "../../../public/vision/choose4.png";
import img5 from "../../../public/vision/choose5.png";
import img6 from "../../../public/vision/choose6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";

import Image from "next/image";
interface ChooseDataItem {
  id: number;
  img: typeof img1;
  heading: string;
  text: string;
}

const chooseData: ChooseDataItem[] = [
  {
    id: 1,
    img: img1,
    heading: "Comprehensive Guidance ",
    text: "Our platform goes beyond listings. With detailed resources, document templates, and best practices, we equip you to guide students effectively through every stage of the admissions process.",
  },
  {
    id: 2,
    img: img2,
    heading: "Admissions  Expertise",
    text: "Specializing exclusively in European institutions, we stay updated on country-specific regulations, visa nuances, and scholarship opportunities—ensuring your consultancy always has the most accurate, actionable insights.",
  },
  {
    id: 3,
    img: img3,
    heading: "Partnerships with Universities",
    text: "Leverage our network of over 100+ premier European universities. These robust partnerships give you direct access to official admissions channels and foster faster, more favorable outcomes for your students.",
  },
  {
    id: 4,
    img: img4,
    heading: "Customized Approach for Every Student",
    text: "Recognizing that no two students are alike, our advanced matching algorithms and expert support allow you to tailor strategies for each applicant, ensuring the best-fit placements for diverse academic profiles.",
  },
  {
    id: 5,
    img: img5,
    heading: "Seamless Integration & Advanced Technology",
    text: "Enjoy an intuitive, user-friendly dashboard that centralizes application management, tracks deadlines in real-time, and automates routine tasks—streamlining your workflow and saving valuable time.",
  },
  {
    id: 6,
    img: img6,
    heading: "Proven Success & Continued Support",
    text: "With a track record of improved acceptance rates and satisfied partners, we offer ongoing support and performance analytics to help you optimize your admissions pipeline and scale your consultancy effectively.",
  },
];

const ChooseUs = () => {
  return (
    <div id="chooseUs" className="py-[4rem] sm:py-[7rem]">
      <div className="ProC">
        <h1 className={`${largeText} text-center`}>Why Choose Us</h1>
        <p className={`${smallText} pt-6 pb-12 sm:w-[70%] text-center m-auto`}>
          We empower study abroad consultants with a seamless platform to manage
          student applications, track progress in real-time, and simplify the
          admission process to European universities—all in one place.
        </p>
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            centeredSlides={false}
            className="w-full relative"
          >
            {chooseData.map((data) => (
              <SwiperSlide key={data.id} className="flex justify-center ">
                <div
                  key={data.id}
                  className="rounded-[1.5rem] border border-[#EDF3F5] boxShadowMob overflow-hidden"
                >
                  <Image
                    src={data.img}
                    alt="levelup"
                    className="h-[22.629vw] w-[22.582vw]"
                  />
                  <div className="px-6 pt-4 pb-6 sm:py-6">
                    <h1 className={`${mediumText} pb-4`}>{data.heading}</h1>
                    <p className={smallText}>{data.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {chooseData.map((data) => (
            <div
              key={data.id}
              className="rounded-[1.5rem] border border-[#EDF3F5] boxShadow overflow-hidden"
            >
              <Image
                src={data.img}
                alt="levelup"
                className="h-[5.629vw] w-[5.582vw]"
              />
              <div className="px-5 pt-6 pb-8">
                <h1 className={`${mediumText} pb-4`} data-aos="fade-up">
                  {data.heading}
                </h1>
                <p className={smallText} data-aos="fade-up">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
