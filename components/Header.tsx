import React from "react";
import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const Header = () => {
  return (
    <div className="bg-[#26235B]">
      <div className="flex justify-evenly">
        {/* left */}
        <div className="bg-[#F6F6F6] text-[#26235B] rounded-2xl">
          <h1 className="text-xl font-bold">Assessment</h1>
          <hr />
          <span>learn it, do it</span>
        </div>
        {/* middle */}
        <div className="text-[#F6F6F6] flex gap-4">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>COURSES</span>
          <span>SHOP</span>
          <span>EVENTS</span>
          <span>CONTACT</span>
        </div>
        {/* right */}
        <div className="flex">
          <div className="flex">
            <Input />
            <CiSearch className="text-[#F6F6F6]" />
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-[#FFB606]">PROFILE</span>
      </div>
    </div>
  );
};

export default Header;
