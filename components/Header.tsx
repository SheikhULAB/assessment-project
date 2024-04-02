import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  return (
    <div className="bg-[#26235B]">
      <div className="flex justify-evenly pt-4 items-center">
        {/* left */}
        <div className="bg-[#F6F6F6] text-[#26235B] rounded-2xl p-2">
          <h1 className="text-xl font-bold">Assessment</h1>
          <hr className="border-blue-900" />
          <span>learn it, do it</span>
        </div>
        {/* middle */}
        <div className="text-[#F6F6F6] flex gap-6 font-normal text-base">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>COURSES</span>
          <span>SHOP</span>
          <span>EVENTS</span>
          <span>CONTACT</span>
        </div>
        {/* right */}
        <div className="flex">
          
          <div className="relative flex">
       
          <input
            type="text"
            placeholder=""
            className="py-2 pl-10 pr-4 w-64 rounded-md focus:outline-none bg-transparent"
          />
             <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-8 -translate-y-1/2 h-5 w-5"
            fill="transparent"
            viewBox="0 0 24 24"
            stroke="#F6F6F6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
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
        <span className="text-[#FFB606] text-xl mt-2 mb-5">PROFILE</span>
      </div>
    </div>
  );
};

export default Header;
