import React from "react";
import CertificateCard from "./CertificateCard";
import CertificateDesign from "./CertificateDesign";

const Certificate = () => {
  return (
    <div>
      <div className="lg:flex">
        <div>
          <CertificateCard />
          <CertificateCard />
        </div>
        <CertificateDesign />
      </div>
    </div>
  );
};

export default Certificate;
