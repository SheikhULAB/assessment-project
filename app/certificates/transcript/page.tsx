"use client"
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import Certificate from "@/components/Certificate";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Transcript = () => {
  const pathname = usePathname();
  return (
    <div className="lg:flex">
       
<LeftSide />

<div className="lg:w-[78%]">
  <Navbar />
  <div className="flex flex-col items-center lg:flex-row">
    <div className={pathname === '/certificates' ? "flex items-center gap-4 bg-[#F7B643] text-[#F6F6F6] font-bold py-4 px-6 rounded-full" : "flex items-center gap-4 md:mr-8 md:ml-8"}>
      <LiaCertificateSolid />
      <Link href="/certificates">My Certificate</Link>
    </div>

    <div className={pathname === '/certificates/transcript' ? "flex items-center gap-4 bg-[#F7B643] text-[#F6F6F6] font-bold py-4 px-6 rounded-full" : ""}>
      <FaBars />
      <Link href="/certificates/transcript">Transcript</Link>
    </div>
  </div>

  <Certificate />      
      </div>
    </div>
  );
};

export default Transcript;