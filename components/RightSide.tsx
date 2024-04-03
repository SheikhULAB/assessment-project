import React from "react";
import FormInput from "./FormInput";
import Navbar from '@/components/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

const RightSide = () => {
  return (
    <div>
     <Navbar />
     <div className="flex items-center gap-8 h-28 bg-[#FEFEFE]">
        <div>
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
        <Button variant="outline" className="text-[#26235B]
         border-solid border-2 border-[#26235B] rounded-3xl">Upload Image</Button>
        <Button variant="outline" className="text-[#26235B]
        border-solid border-2 border-[#26235B] rounded-3xl ml-6">Delete</Button>
        </div>
      </div>
      <div>
        <FormInput />
      </div>
    </div>
  );
};

export default RightSide;
