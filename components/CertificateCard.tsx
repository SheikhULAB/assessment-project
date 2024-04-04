import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdShare } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
interface TextProps {
  text: string;
}

const CertificateCard: React.FC<TextProps>  = ({text}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <LiaCertificateSolid className="text-yellow-500 text-4xl lg:text-5xl mr-2" />
          <span className="text-xl lg:text-2xl font-semibold">
            {text} Belt Certificate
          </span>
        </div>
        <div className="flex items-center">
          <IoMdShare className="text-gray-500 text-xl lg:text-2xl mr-4" />
          <BsDownload className="text-gray-500 text-xl lg:text-2xl" />
        </div>
      </div>

      <div className="mt-4">
        <small className="text-gray-600">Achievement Date: 5 Apr 2024</small>
        <p className="text-gray-800 mt-2">
          Non, amet, nibh ullamcorper ex. Laoreet amet, leo. At, tincidunt enim.
          Facilisis amet, urna. Odio odio non urna. Nibh id eu nisi.
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
