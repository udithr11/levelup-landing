import React, { useState } from "react";
import Navbar from "./Navbar";
import heroImage from "../../../public/heroImage.png";
import heroImageMob from "../../../public/heroImageMob.png";
import Image from "next/image";
import { buttonText, buttonWrapper, homeText, smallText } from "../constants";
import ModalForm from "./ModalForm";
import axios from "axios";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
    company: "",
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
      console.error(error, "error");
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
    <section
      id="hero"
      className="min-h-[98vh] w-full linearGradient rounded-b-[3rem] relative flex flex-col"
    >
      <Navbar />

      <div className="ProC  flex ">
        <div
          className="md:w-[53%] h-full flex flex-col   gap-6 pt-20 md:pt-[10vw]"
          data-aos="fade-up"
        >
          <h1 className={`${homeText} text-white`}>
            Your Gateway to European Admissions
          </h1>
          <p className={`${smallText} !text-[#FFFFFFCC]`}>
            Elevate your consultancy&apos;s potential with our streamlined
            platform—simplifying student applications, real-time tracking, and
            comprehensive visa support to secure admissions at Europe&apos;s
            premier institutions.
          </p>
          <div
            className={`${buttonWrapper} ${buttonText} mt-2`}
            onClick={() => handleGetStarted()}
          >
            <span>Get Started</span>
          </div>
        </div>
        <div className="absolute right-[5%] bottom-[0%]   hidden xs:flex xs:w-[49.2063vw] xs:h-[42.063vw] 2xl:h-[36.063vw] 2xl:w-[43.2063vw]  ">
          <Image src={heroImage} alt="Level up" fill />
        </div>
        <div className="absolute right-[5%] bottom-[0%] flex xs:hidden  w-[87.2vw] h-[81.733vw]   ">
          <Image src={heroImageMob} alt="Level up" fill />
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
    </section>
  );
};

export default HeroSection;
