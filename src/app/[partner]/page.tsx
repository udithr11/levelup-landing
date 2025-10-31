import React from "react";
import Footer from "../components/Footer";
import PartnerForm from "../components/PartnerForm";
import { Toaster } from "react-hot-toast";

interface formProp {
  params: { partner: string };
}

const Partner: React.FC<formProp> = ({ params }) => {
  console.log(params, "params");
  return (
    <>
      <Toaster />
      <PartnerForm partnerId={params.partner} />
      <Footer />
    </>
  );
};

export default Partner;
