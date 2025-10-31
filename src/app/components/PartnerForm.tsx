"use client";
import React, { useState, useRef, useEffect } from "react";
import expand from "../../../public/expand.svg";
import Image from "next/image";
import Navbar from "./Navbar";
import {
  buttonText,
  buttonWrapper,
  formHeading,
  largeText,
  mediumText,
  smallText,
} from "../constants";
// import countries from "world-countries";
import csc from "countries-states-cities";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import axios from "axios";
import toast from "react-hot-toast";

interface partnerFormProp {
  partnerId: string;
}

const PartnerForm: React.FC<partnerFormProp> = ({ partnerId }) => {
  // console.log(partnerId, "partnerId");
  const labeClass: string = "text-white pb-3 block";
  const inputClass: string =
    "bg-[#D9D9D90D] border border-[#FFFFFF33] px-6 py-4 w-full rounded-lg focus:outline-none text-white";

  const emailPrefrenceRef = useRef<HTMLLabelElement>(null);
  const countryRef = useRef<HTMLLabelElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmailAddress: "",
    mobileNo: "",
    whatsappNo: "",
    emailPreference: "",
    company: "",
    website: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [isValidPartner, setIsValidPartner] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    // Function to validate partner
    const checkPartner = async (uuid: string) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/partners/check/${uuid}`
        );

        // console.log("status code =", response.status);

        if (response.status === 200) {
          setIsValidPartner(true);
        }
      } catch (error) {
        console.error("Error checking partner:", error);
        setIsValidPartner(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Extract UUID and check partner

    if (partnerId) {
      checkPartner(partnerId);
    } else {
      setIsLoading(false);
    }
  }, [partnerId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form validation
    const errors: { [key: string]: string } = {};

    if (formData.email !== formData.confirmEmailAddress) {
      errors.email = "Email addresses do not match.";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.password = "Passwords do not match.";
    }

    if (!formData.country || formData.country === "Select Country") {
      errors.country = "Country is required.";
      countryRef.current?.scrollIntoView({ behavior: "smooth" });
      // return;
    }
    if (!formData.emailPreference) {
      errors.password = "Please mention email preference.";
      emailPrefrenceRef.current?.scrollIntoView({ behavior: "smooth" });
      // return;
    }

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
      return;
    }

    // filtering the necessary fields to be passed to api from the formData
    const apiFormData = {
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      mobile_no: formData.mobileNo,
      whatsapp_no: formData.whatsappNo,
      company_name: formData.company,
      website: formData.website,
      address: formData.address,
      city: formData.city,
      post_code: formData.postCode,
      country: formData.country,
    };

    // console.log("PartnerformData=", formData);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/partners/create/${partnerId}`,
        apiFormData
      );

      // Clear the form before redirecting
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmailAddress: "",
        mobileNo: "",
        whatsappNo: "",
        emailPreference: "",
        company: "",
        website: "",
        address: "",
        city: "",
        postCode: "",
        country: "",
        password: "",
        confirmPassword: "",
      });
      setSelected("Select Country");

      setRegistrationSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        const partnerUrl = process.env.NEXT_PUBLIC_PARTNER_URL || "https://partner.europeanuniversities.in";
        window.location.href = partnerUrl;
      }, 2000);

      return;
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
    setSelected("Select Country");
  };

  const [selected, setSelected] = useState("Select Country");

  interface CountryData {
    countryname: string;
    // shortForm: string;
  }

  const countryData: CountryData[] = csc.getAllCountries().map((data) => ({
    countryname: data.name,
  }));
  // console.log("countryData=", countryData);

  const handleCountryChange = (selectedCountryName: string) => {
    if (selectedCountryName) {
      setSelected(selectedCountryName);
      setFormData((prevData) => ({
        ...prevData,
        country: selectedCountryName,
      }));
    }
  };

  const LoadingScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#204B9A] z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
        <p className="text-white text-xl">Verifying Partner...</p>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  // If partner is not valid
  if (!isValidPartner) {
    return (
      <div
        className={`${mediumText} fixed inset-0 flex items-center justify-center bg-[#204B9A] text-white`}
      >
        <p>Invalid Partner.&nbsp; Access Denied!</p>
      </div>
    );
  }

  return (
    <section className=" w-full bg-[#204B9A]  relative flex flex-col">
      <Navbar />
      <div className="ProC">
        <h1
          className={`${largeText} sm:w-[60%] text-center text-white m-auto pt-20 capitalize pb-8`}
        >
          Sign-Up to access our online portal and join our network
        </h1>
        {registrationSuccess && (
          <div style={{ color: "green", textAlign: "center", margin: "20px 0" }}>
            Registration successful! Redirecting to partner portal...
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`}>Last Name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="email"
                type="email"
                // value={formData.email}
                onChange={handleChange}
                placeholder="Enter E-Mail"
                className={` ${smallText} ${inputClass} `}
                style={{ textTransform: 'lowercase' }}
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label
                className={`${smallText} ${labeClass}`}
                ref={emailPrefrenceRef}
              >
                Confirm E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="confirmEmailAddress"
                type="email"
                value={formData.confirmEmailAddress}
                onChange={handleChange}
                placeholder="Enter Confirm E-Mail"
                className={` ${smallText} ${inputClass} `}
                style={{ textTransform: 'lowercase' }}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="mobileNo"
                type="tel"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter Mobile No"
                className={` ${smallText} ${inputClass} `}
                pattern="^\+?[0-9]+"
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`}>
                Whatsapp No <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="whatsappNo"
                type="tel"
                value={formData.whatsappNo}
                onChange={handleChange}
                placeholder="Enter Whatsapp No"
                className={` ${smallText} ${inputClass} `}
                pattern="^\+?[0-9]+"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center  sm:space-x-12 py-12">
            <p className={`${smallText} text-white`}>
              Do You Want All The Applications Update To This E-Mail ID?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-8 pt-4 sm:pt-0">
              <div className="inline-flex items-center">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    name="emailPreference"
                    type="radio"
                    value="Yes"
                    checked={formData.emailPreference === "Yes"}
                    onChange={handleChange}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-white checked:border-white transition-all"
                  />
                  <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className={`ml-2 text-white cursor-pointer ${smallText}`}
                >
                  Yes
                </label>
              </div>

              <div className="inline-flex items-center">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    name="emailPreference"
                    type="radio"
                    value="No"
                    checked={formData.emailPreference === "No"}
                    onChange={handleChange}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-white checked:border-white transition-all"
                  />
                  <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className={`ml-2 text-white cursor-pointer ${smallText}`}
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <h1 className={`${formHeading} `}>Company Details </h1>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                Company <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Company"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`} ref={countryRef}>
                Website
              </label>
              <input
                name="website"
                type="text"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter Website"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                Address <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`}>
                City <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                Post Code <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="postCode"
                type="text"
                value={formData.postCode}
                onChange={handleChange}
                placeholder="Enter Post Code"
                className={` ${smallText} ${inputClass} `}
                pattern="[0-9]+"
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`}>
                Country <span className="text-red-500">*</span>
              </label>

              <Listbox value={selected} onChange={handleCountryChange}>
                <div className="relative ">
                  <ListboxButton className="grid  cursor-pointer2 grid-cols-1   pl-3 pr-2 text-left   focus:outline focus:outline-2 focus:-outline-offset-2  bg-[#D9D9D90D] border border-[#FFFFFF33] px-6 py-4 w-full rounded-lg focus:outline-none text-white">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                      <span className="block truncate">{selected}</span>
                    </span>
                    <Image
                      src={expand}
                      alt="expand"
                      className="w-3 h-3 absolute right-[5%] top-1/2 transform -translate-y-1/2 "
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    {countryData.map((data, index) => (
                      <ListboxOption
                        key={index}
                        value={data.countryname}
                        className="group relative cursor-pointer select-none py-2 pl-3 pr-9  text-gray-900 data-[focus]:bg-[#dde0e6] data-[focus]:text-black data-[focus]:outline-none"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                            {data.countryname}
                          </span>
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
          </div>
          <h1 className={`${formHeading} pt-12`}>Your Password</h1>
          <div className="flex flex-col sm:flex-row justify-between pt-8">
            <div className="sm:w-[48.5%] ">
              <label className={`${smallText} ${labeClass}`}>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
            <div className="sm:w-[48.5%] pt-4 sm:pt-0">
              <label className={`${smallText} ${labeClass}`}>
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter Confirm Password"
                className={` ${smallText} ${inputClass} `}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${buttonWrapper} ${buttonText} mt-12 mb-24 m-auto bg-white !text-[#204B9A]  !px-20 button-blue`}
            >
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PartnerForm;
