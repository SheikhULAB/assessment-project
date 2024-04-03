import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="bg-[#26235B] px-4 py-2 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* left */}
        <div className="bg-[#F6F6F6] text-[#26235B] rounded-3xl p-2 md:pl-8 md:pr-8 mb-0">
          <h1 className="text-lg sm:text-xl font-bold">Assessment</h1>
          <hr className="border-blue-900 my-1" />
          <span className="text-xs sm:text-sm">learn it, do it</span>
        </div>

        {/* middle */}
        <div className="text-[#F6F6F6] flex flex-wrap gap-4 lg:gap-12 font-normal text-xs sm:text-sm">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>COURSES</span>
          <span>SHOP</span>
          <span>EVENTS</span>
          <span>CONTACT</span>
        </div>
        {/* right */}
        <div className="flex items-center">
          <div className="relative flex">
            <input
              type="text"
              placeholder=""
              className="py-1 pl-8 pr-3 w-36 sm:w-48 rounded-md focus:outline-none bg-transparent text-[#F6F6F6] text-xs sm:text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
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
          <div className="ml-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-[#FFB606] text-sm lg:text-2xl font-black mt-1 mb-3">
          PROFILE
        </span>
      </div>
    </div>
  );
};

export default Header;
