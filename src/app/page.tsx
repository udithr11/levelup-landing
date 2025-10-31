"use client";
import { Toaster } from "react-hot-toast";
import AboutUs from "./components/AboutUs";
import ChooseUs from "./components/ChooseUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Partnership from "./components/Partnership";
import StartYourPlan from "./components/StartYourPlan";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Toaster />
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <Work />
      <Testimonials />
      <Faq />
      <Partnership />
      <StartYourPlan />
      <Footer />
    </>
  );
}
