import React from "react";
import { largeText, mediumText, smallText } from "../constants";

interface workDataItems {
  id: number;
  heading: string;
  text: string;
}

const workData: workDataItems[] = [
  {
    id: 1,
    heading: "Registration",
    text: "Create an account, set up your profile and complete verification.",
  },
  {
    id: 2,
    heading: "Add Student Profiles",
    text: "Upload your students' academic backgrounds, test scores, and preferences.",
  },
  {
    id: 3,
    heading: "Manage Applications",
    text: "Use our integrated tools to submit applications, track deadlines, and organize documents.",
  },
  {
    id: 4,
    heading: "Secure  Offers & Visa ",
    text: "We guide you through acceptance procedures and visa documentation",
  },
];

const Work = () => {
  return (
    <div id="work" className="py-[4rem] sm:py-[7rem] bg-[#204B9A]">
      <div className="ProC">
        <h1 className={`${largeText} text-center text-white`}>How It Work</h1>
        <p
          className={`${smallText} text-center m-auto sm:w-[52%] pt-6 pb-12 text-[#FFFFFFCC]`}
        >
          Discover how our process works step by step to ensure you as our
          successful partner.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {workData.map((data) => (
            <div className="text-center" key={data.id}>
              <div className="w-[16vw] h-[16vw] sm:w-[5.291vw] sm:h-[5.291vw] flex items-center justify-center border border-[#ECDB60] rounded-full m-auto">
                <p className={`${mediumText} text-[#ECDB60]`}> {data.id}</p>
              </div>
              <p className={`${mediumText} py-4 text-white`} data-aos="fade-up">
                {data.heading}
              </p>
              <p className={`${smallText} text-[#FFFFFFCC]`} data-aos="fade-up">
                {data.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
