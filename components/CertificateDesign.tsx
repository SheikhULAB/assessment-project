import React from "react";

const CertificateDesign = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 lg:p-6 lg:w-2/3 xl:w-1/2 mx-auto mt-10 border border-[#434062] md:ml-14 md:mr-8">
      <div className="text-center mb-4">
        <h1 className="text-xl lg:text-2xl font-bold">ASSESSMENT</h1>
        <hr className="border-t-2 border-gray-400 my-1 lg:my-2 w-12 lg:w-16 mx-auto" />
        <small className="text-xs lg:text-sm">learn it, do it</small>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">CERTIFICATE</h2>
        <p className="text-sm lg:text-base">of White Belt</p>
      </div>

      <div className="mb-4 text-center">
        <p className="text-sm lg:text-base">PROUDLY PRESENTED TO</p>
        <h3 className="text-lg lg:text-xl font-bold">Sheikh Yeamin</h3>
      </div>

      <div className="text-left mb-4">
        <small className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          voluptatem veniam fuga tempore, ipsum optio fugiat veritatis eligendi
          voluptatum iusto laudantium ipsa magnam adipisci esse nulla dolorem.
          Temporibus, alias delectus?
        </small>
      </div>

      <div className="text-center">
        <hr className="border-t-2 border-gray-400 my-2 lg:my-4 w-10 lg:w-16 mx-auto" />
        <p className="text-sm lg:text-base">Signature</p>
      </div>
    </div>
  );
};

export default CertificateDesign;
