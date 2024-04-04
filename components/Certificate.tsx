import React from "react";
import CertificateCard from "./CertificateCard";
import CertificateDesign from "./CertificateDesign";

const Certificate = () => {
  return (
    <div>
      <div className="lg:flex">
        <div>
          <CertificateCard text = "Yellow" />
          <CertificateCard text="White" />
        </div>
        <CertificateDesign />
      </div>
    </div>
  );
};

export default Certificate;
