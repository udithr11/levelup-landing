import React from "react";
import { largeText, smallText } from "../constants";
import img1 from "../../../public/partnership/college1.svg";
import img2 from "../../../public/partnership/college2.svg";
import img3 from "../../../public/partnership/college3.svg";
import img4 from "../../../public/partnership/college4.svg";
import img5 from "../../../public/partnership/college5.svg";
import img6 from "../../../public/partnership/college6.svg";
import img7 from "../../../public/partnership/college7.svg";
import img8 from "../../../public/partnership/college8.svg";
import img9 from "../../../public/partnership/college9.svg";
import img10 from "../../../public/partnership/college10.svg";
import img11 from "../../../public/partnership/college11.svg";
import img12 from "../../../public/partnership/college12.svg";
import img13 from "../../../public/partnership/college13.svg";
import img14 from "../../../public/partnership/college14.svg";
import img15 from "../../../public/partnership/college15.svg";
import img16 from "../../../public/partnership/college16.svg";
import img17 from "../../../public/partnership/college17.svg";
import img18 from "../../../public/partnership/college18.svg";
import img19 from "../../../public/partnership/college19.svg";

import Image from "next/image";

const companyImages: (typeof img1)[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const Partnership = () => {
  return (
    <div className="pb-[4rem] sm:pb-[7rem]">
      <h1 className={`${largeText} pb-4 text-center`}>
        100+ University Partnerships
      </h1>
      <p className={`${smallText} pb-10 sm:w-[43%] m-auto text-center`}>
        We&apos;ve built strong partnerships with 100+ universities worldwide.
      </p>
      <div className="marquee-container w-full overflow-hidden relative ">
        <div className="marquee-wrapper flex">
          <div
            className="marquee-content flex animate-marquee"
            style={{
              width: "calc(100% * 10)",
              animationDuration: "100s",
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
                className="flex-shrink-0 min-h-[21.33vw] sm:min-h-[5.291vw] mx-2 flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt={`Company ${(index % companyImages.length) + 1}`}
                  className="object-contain mx-4 sm:mx-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
