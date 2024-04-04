"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <div>
      <div>
        <h2 className="text-2xl text-[#26235B] tracking-wider font-extrabold m-2 p-2">
          My Profile
        </h2>
        <div className="flex items-center gap-5 m-2 p-4">
          <Link href="/" className={pathname === '/' ? "border-b-2 border-[#F7B643] text-[#26235B] font-bold" : ""}>Edit Profile</Link>
          <Link href="/certificates" className={pathname === '/certificates' ? "border-b-2 border-[#F7B643] text-[#26235B] font-bold" : ""} >Certificates</Link>
          <Link href="/">Competitions</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;