import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FormInput = () => {
  return (
    <form className="form flex flex-col gap-6 md:ml-10">
      <div className="form-group flex flex-col gap-2 md:flex-row md:flex-wrap justify-between md:gap-4 lg:gap-6">
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" placeholder="Assessment Name" />
        </div>
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="nationality">Nationality:</Label>
          <Input type="text" id="nationality" placeholder="Bangladeshi" />
        </div>
      </div>
      <div className="form-group flex flex-col gap-2 md:flex-row md:flex-wrap justify-between md:gap-4 lg:gap-6">
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="date">Date of Birth:</Label>
          <Input type="date" id="date" placeholder="1/1/2001" />
        </div>
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="nid">NID:</Label>
          <Input type="number" id="nid" placeholder="842 55 636" />
        </div>
      </div>
      <div className="form-group flex flex-col gap-2 md:flex-row md:flex-wrap justify-between md:gap-4 lg:gap-6">
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="blood-group">Blood Group:</Label>
          <Input type="text" id="blood-group" placeholder="B+" />
        </div>
        <div className="form-item w-full md:w-1/2 lg:w-1/3">
          <Label htmlFor="gender">Gender:</Label>
          <Input type="text" id="gender" placeholder="Male" />
        </div>
      </div>
      <div className="form-group flex flex-col gap-2 md:flex-row">
        <div className="form-item w-full md:w-full">
          <Label htmlFor="present-address">Present Address:</Label>
          <Input
            type="address"
            id="present-address"
            placeholder="Uttara, sector 99, H-99"
          />
        </div>
      </div>
      <div className="form-group flex flex-col gap-2 md:flex-row">
        <div className="form-item w-full md:w-full">
          <Label htmlFor="permanent-address">Permanent Address:</Label>
          <Input
            type="address"
            id="permanent-address"
            placeholder="Uttara, sector 99, H-99"
          />
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-6 lg:mt-8">
        <span className="info-text text-center">
          If you change your Profile, then press Save Changes.
        </span>
        <Button className="md:ml-60">Save Changes</Button>
      </div>
    </form>
  );
};

export default FormInput;
