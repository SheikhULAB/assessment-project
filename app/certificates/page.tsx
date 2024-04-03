import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import Certificate from "@/components/Certificate";
import Link from "next/link";

const Certificates = () => {
  return (
    <div className="lg:flex">
      <LeftSide />

      <div className="lg:w-[78%]">
        <Navbar />
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex items-center mb-4 lg:mb-0">
            <LiaCertificateSolid />
            <Link href="/certificates">My Certificate</Link>
          </div>

          <div className="flex items-center ml-0 lg:ml-8">
            <FaBars />
            <Link href="/certificates">Transcript</Link>
          </div>
        </div>

        <Certificate />
      </div>
    </div>
  );
};

export default Certificates;
