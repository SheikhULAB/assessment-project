import Link from "next/link";
import React from 'react';

const Navbar = () => {
    return (
        <div>
        <div>
        <h2 className="text-2xl text-[#26235B] tracking-wider font-extrabold m-2 p-2">My Profile</h2>
        <div className="flex items-center gap-5 m-2 p-4">
          <Link href="/">Edit Profile</Link>
          <Link href="/certificates">Certificates</Link>
          <Link href="/">Competitions</Link>
        </div>
      </div>

      </div>
    );
};

export default Navbar;