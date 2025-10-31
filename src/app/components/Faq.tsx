"use client";
import React, { useState } from "react";
import { largeText, regularText, smallText } from "../constants";
import {
  Accordion as MaterialAccordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <div className="bg-[#F4F8FA] p-1 rounded-full w-[5rem] rotate-[-45deg] relative left-[75%] sm:left-[70%] md:left-[65%] lg:left-[60%] xl:left[50%] top-[-2rem] sm:top-[-1.75rem] lg:top-[-1.5rem] xl:top-[-1rem] ml-[-2rem] sm:ml-0">
      <div className="p-2 bg-white rounded-full w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${
            id === open ? "" : "rotate-45"
          } h-[3vw] w-[3vw] sm:h-[1.3vw] sm:w-[1.3vw] transition-transform duration-200`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
}

const Faq: React.FC = () => {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question:
        "How does your platform help in managing multiple student applications?",
      answer:
        "Our platform provides a centralized dashboard where you can efficiently track, manage, and organize multiple student applications, receive real-time updates, and streamline the entire admission process—all from one place.",
    },
    {
      id: 2,
      question: "Do we need in-depth knowledge of European visa regulations?",
      answer:
        "Not necessarily. Our experts and up-to-date resources provide comprehensive guidance on visas, so you can advise your students confidently.",
    },
    {
      id: 3,
      question: "How do we track multiple student applications simultaneously?",
      answer:
        "Our intuitive dashboard consolidates all applications in one place. You can sort, filter, and receive notifications on key milestones.",
    },
    {
      id: 4,
      question: "Can we apply to multiple universities for a single student?",
      answer:
        "Yes, our platform allows you to manage multiple applications for a single student, ensuring they have the best chances of securing admission to their preferred European universities.",
    },
    {
      id: 5,
      question: "What if our students also consider non-European destinations?",
      answer:
        "While we specialize in Europe, our network is ever-expanding. Reach out to us for updates on additional regions or upcoming partnerships.",
    },
  ];

  return (
    <div id="faq" className="py-[4rem] sm:py-[7rem]">
      <div className="ProC">
        <h1 className={`${largeText} text-center pb-12`}>
          Common Questions Answered
        </h1>
        <div className="sm:px-12 md:px-16 lg:px-24">
          {faqItems.map((item) => (
            <MaterialAccordion
              key={item.id}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="mb-4 rounded-3xl border border-[#EDF3F5] pl-6 sm:pl-14 pr-4 sm:pr-8 py-1 overflow-hidden"
            >
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className={`border-b-0 ${regularText}`}
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody
                className={`${smallText} pt-0 pr-6`}
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {item.answer}
              </AccordionBody>
            </MaterialAccordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
