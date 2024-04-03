import React from "react";
import FormInput from "./FormInput";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const RightSide = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8 bg-[#FEFEFE] p-4 md:p-6">
        <div>
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button
            variant="outline"
            className="text-[#26235B] border-solid border-2 border-[#26235B] rounded-3xl"
          >
            Upload Image
          </Button>
          <Button
            variant="outline"
            className="text-[#26235B] border-solid border-2 border-[#26235B] rounded-3xl"
          >
            Delete
          </Button>
        </div>
      </div>
      <div>
        <FormInput />
      </div>
    </div>
  );
};

export default RightSide;
