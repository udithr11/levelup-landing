import React from "react";
import { buttonText, buttonWrapper, mediumText, smallText } from "../constants";
import close from "../../../public/modal_Close.svg";
import Image from "next/image";

interface ModalFormProps {
  formData: {
    name: string;
    company: string;
    phone_no: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  closeModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  handleChange,
  handleSubmit,
  closeModal,
}) => {
  return (
    <div className="modal">
      <form className="w-[90%] sm:w-[50%]" onSubmit={handleSubmit}>
        <div className="bg-[#204B9A] p-6 rounded-t-lg">
          <div
            className="mr-auto w-fit float-end cursor-pointer relative z-10"
            onClick={closeModal}
          >
            <Image
              src={close}
              alt="close"
              className="w-[3.2vw] h-[3.2vw] sm:w-[1.058vw] sm:h-[1.058vw]"
            />
          </div>
          <p className={`${mediumText} text-center text-white relative`}>
            Fill The Details
          </p>
          <p
            className={`${smallText} text-center text-[#FFFFFFCC] sm:w-[65%] pt-4 m-auto`}
          >
            Share your details with us, and our team will get in touch with you
            shortly.
          </p>
        </div>
        <div className="bg-white rounded-b-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="sm:w-[48%] ">
              <label className={`${smallText} text-black pb-2 block`}>
                Full Name
              </label>
              <input
                required
                name="name"
                type="text"
                // value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className={`border border-[#D4D2CD] px-6 py-4 w-full rounded-lg focus:outline-none ${smallText} text-black`}
              />
            </div>
            <div className="sm:w-[48%] pt-4 sm:pt-0">
              <label className={`${smallText} text-black pb-2 block`}>
                Phone Number
              </label>
              <input
                required
                name="phone_no"
                type="tel"
                // value={formData.phone_no}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className={`border border-[#D4D2CD] px-6 py-4 w-full rounded-lg focus:outline-none ${smallText} text-black`}
                pattern="^\+?[0-9]+"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:pt-4">
            <div className="sm:w-[48%]  pt-4 sm:pt-0">
              <label className={`${smallText} text-black pb-2 block`}>
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                // value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={`border border-[#D4D2CD] px-6 py-4 w-full rounded-lg focus:outline-none ${smallText} text-black`}
                style={{ textTransform: 'lowercase' }}
              />
            </div>
            <div className="sm:w-[48%] pt-4 sm:pt-0">
              <label className={`${smallText} text-black pb-2 block`}>
                Company Name
              </label>
              <input
                required
                name="company"
                type="text"
                // value={formData.company}
                onChange={handleChange}
                placeholder="Enter Company Name"
                className={`border border-[#D4D2CD] px-6 py-4 w-full rounded-lg focus:outline-none ${smallText} text-black`}
              />
            </div>
          </div>
          <div className="flex justify-end sm:justify-center ">
            <button
              type="submit"
              className={`${buttonWrapper} ${buttonText} mt-10 `}
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
