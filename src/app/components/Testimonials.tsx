"use client";
import React, { useRef, useState } from "react";
import { largeText, smallText } from "../constants";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "../../../public/testimonial/testimonial1.svg";
import img2 from "../../../public/testimonial/testimonial2.svg";
import img3 from "../../../public/testimonial/testimonial3.svg";

import arrow from "../../../public/testimonial/arrow.svg";

interface cardItems {
  id: number;
  img: typeof img1;
  name: string;
  designation: string;
  text: string;
}

const cardDetails: cardItems[] = [
  {
    id: 1,
    img: img1,
    name: "Aušrinė Gedminaitė",
    designation: "International Studies Manager",
    text: "EU Universities stands out for their professionalism and attention to detail. They have been a crucial partner in helping us attract high-quality students from around the world. The seamless coordination between their team and ours has led to a number of successful placements.",
  },
  {
    id: 2,
    img: img2,
    name: "Rasulov Farruhbek",
    designation: "The head of the International Cooperation Department",
    text: "The team at EU Universities understands the unique needs of medical education and provides students who are academically strong and passionate about pursuing a career in healthcare. Their pre-admission counseling helps streamline the process for both students and universities.",
  },
  {
    id: 3,
    img: img3,
    name: "Ingrida Kutkienė",
    designation: "Relations and Strategic Development",
    text: "EU Universities has been an excellent partner for us. The students they recommend are always a good match for our academic programs, and their support throughout the admissions process is exemplary. We trust their expertise and look forward to many more years of collaboration.",
  },
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div id="testimonials" className="py-[4rem] sm:py-[7rem] bg-[#204B9A0D]">
      <div className="ProC flex flex-col sm:flex-row justify-between">
        <div className="sm:w-[31%] relative z-[5] flex flex-col">
          <h1 className={largeText}>Happy Clients: Testimonials</h1>
          <p className={`${smallText} pt-4 pb-10 sm:py-4`}>
            Hear it from our partners who have experienced the journey with us.
          </p>
          {/* Swiper Navigation Buttons */}
          <div className="hidden sm:flex space-x-4 pt-6 ">
            <div
              ref={prevRef}
              onClick={handlePrev}
              className="swiper-custom-prev rounded-full cursor-pointer w-[4.629vw] h-[4.629vw] flex justify-center items-center bg-white"
            >
              <Image
                src={arrow}
                className="w-[0.5952vw]  rotate-180"
                alt="Left"
              />
            </div>
            <div
              ref={nextRef}
              onClick={handleNext}
              className="swiper-custom-next rounded-full cursor-pointer w-[4.629vw] h-[4.629vw] flex justify-center items-center bg-white"
            >
              <Image
                src={arrow}
                alt="Right"
                className="w-[0.5952vw] h-[1.058vw]"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:w-[65%] relative z-[100]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.25}
            onSwiper={(swiperInstance) => {
              setSwiper(swiperInstance);

              // Manual navigation setup
              if (prevRef.current) {
                prevRef.current.addEventListener("click", () => {
                  swiperInstance.slidePrev();
                });
              }
              if (nextRef.current) {
                nextRef.current.addEventListener("click", () => {
                  swiperInstance.slideNext();
                });
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            centeredSlides={false}
            className="w-full relative"
          >
            {cardDetails.map((cardDetail) => (
              <SwiperSlide
                key={cardDetail.id}
                className="flex justify-center pb-12 sm:pb-0"
              >
                <div
                  className={`flex flex-col text-left gap-4 sm:gap-6 bg-white p-6 sm:px-8 sm:py-12 rounded-[20px] h-[28rem] sm:h-[26rem]`}
                >
                  <div className="flex items-center">
                    <Image src={cardDetail.img} alt="user" />
                    <div className="pl-4">
                      <p className={`${smallText} text-black font-semibold`}>
                        {cardDetail.name}
                      </p>
                      <p className={smallText}>{cardDetail.designation}</p>
                    </div>
                  </div>
                  <div className={smallText}>{cardDetail.text}</div>
                </div>
              </SwiperSlide>
            ))}
            {/* Mobile Navigation */}
            <div className="flex sm:hidden space-x-4 pt-6 ">
              <div
                onClick={handlePrev}
                className="swiper-custom-prev absolute left-[35%] bottom-[0%] rounded-full cursor-pointer w-[12.33vw] h-[12.33vw] flex justify-center items-center bg-white z-[100]"
              >
                <Image
                  src={arrow}
                  className="w-[6px] h-[11px] rotate-180"
                  alt="Left"
                />
              </div>
              <div
                onClick={handleNext}
                className="swiper-custom-next rounded-full absolute left-[50%] bottom-[0%] cursor-pointer w-[12.33vw] h-[12.33vw] flex justify-center items-center bg-white z-[100]"
              >
                <Image src={arrow} alt="Right" className="w-[6px] h-[11px]" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
