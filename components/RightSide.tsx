import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";

const RightSide = () => {
  return (
    <div>
      <div>
        <h2>My Profile</h2>
        <div className="flex items-center gap-5">
          <Link href="/">Edit Profile</Link>
          <Link href="/certificates">Certificates</Link>
          <Link href="/competitions">Competitions</Link>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div>
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
        <Button variant="outline">Upload Image</Button>
        <Button variant="outline">Delete</Button>
        </div>
      </div>

      <div>
        <FormInput />
      </div>
    </div>
  );
};

export default RightSide;
