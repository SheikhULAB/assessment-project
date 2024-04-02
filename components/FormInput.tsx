import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"

const FormInput = () => {
  return (
    <form>
      <div className="flex">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name :</Label>
          <Input type="text" id="name" placeholder="Assessment Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nationality">Nationality :</Label>
          <Input type="text" id="nationality" placeholder="Bangladeshi" />
        </div>
      </div>

      <div className="flex">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="date">Date of Birth :</Label>
          <Input type="date" id="date" placeholder="1/1/2001" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nid">NID :</Label>
          <Input type="number" id="nid" placeholder="842 55 636" />
        </div>
      </div>

      <div className="flex">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="blood-group">Blood Group :</Label>
          <Input type="text" id="blood-group" placeholder="B+" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="gender">Gender :</Label>
          <Input type="text" id="gender" placeholder="Male" />
        </div>
      </div>
      
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="present-address">Present Address :</Label>
      <Input type="address" id="present-address" placeholder="Uttara, sector 99, H-99" />
    </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="permanent-address">Permanent Address :</Label>
      <Input type="address" id="permanent-address" placeholder="Uttara, sector 99, H-99" />
    </div>

    <div>
        <span>If you change your Profile, then Press Save Changes.</span>
        <Button>Save Changes</Button>

    </div>


    </form>
  );
};

export default FormInput;
