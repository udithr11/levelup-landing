"use client";
import React, { useState } from "react";
import { buttonText, buttonWrapper, largeText, smallText } from "../constants";
import Image from "next/image";
import img from "../../../public/partnership/partnerLady.png";
import axios from "axios";
import toast from "react-hot-toast";

import ModalForm from "./ModalForm";

const StartYourPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone_no: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("formData=", formData);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/partners/leads`,
        formData
      );
      if (response.status === 201) {
        toast.success("Submitted Successfully!");
      } else {
        toast.error("Please try again later");
      }
      console.log(response, "response");
    } catch (error) {
      console.log(error, "errosssss");
      toast.error("Please try again!");
    }

    setIsModalOpen(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone_no: "",
    });
  };

  return (
    <>
      <div className="pb-[4rem] sm:pb-[7rem]">
        <div className="ProC  ">
          <div className="flex flex-col sm:flex-row px-4 sm:px-14 lg:px-20 justify-between items-center linearGradient rounded-[1rem]">
            <div className="sm:w-[62%]">
              <h1 className={`${largeText} text-white pt-12 sm:pt-0`}>
                Ready to Expand Your Consultancy&apos;s Reach in Europe?
              </h1>
              <p className={`${smallText} py-6 text-[#FFFFFFCC] sm:w-[87%]`}>
                Join forces with our end-to-end platform and unlock direct
                access to hundreds of European universities.
              </p>
              <div
                className={`${buttonText} ${buttonWrapper}`}
                onClick={() => handleGetStarted()}
              >
                <span>Become a Partner</span>
              </div>
            </div>
            <div className="sm:w-[30%]">
              <Image
                src={img}
                alt="partner"
                className="pt-6 w-[76.5333vw] h-[90.25vw] sm:w-[21.031vw] sm:h-[24.8vw]"
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default StartYourPlan;
