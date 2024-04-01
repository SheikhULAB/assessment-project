import React from 'react';
import { TbKarate } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { LiaVideoSolid } from "react-icons/lia";
import { GoContainer } from "react-icons/go";
import { GiConfrontation } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const BottomPortion = () => {
    return (
        <div>
          <div>

            <div className='flex items-center'>
              <TbKarate />
              <span>Karate Course</span>
            </div>

            <div className='flex items-center'>
              <MdCastForEducation />  
              <span>Online Courses</span>    
            </div>

            <div className='flex items-center'>
                <LiaVideoSolid />
                <span>Videos</span>
            </div>           

            <div className='flex items-center'>
                <GoContainer />
                <span>Equipments</span>
            </div>   

             <div className='flex items-center'>
                <GiConfrontation />
                <span>Competition</span>
            </div>

          </div>

          <div>

            <div className='flex items-center'>
                <FaHeart />
                <span>Your Favourite</span>
            </div>   

            <div className='flex items-center'>
                <IoIosNotifications />
                <span>Notification</span>
            </div>

            <div className='flex items-center'>
                <RiAdminFill />
                <span>My Profile</span>
            </div>

            <div className='flex items-center'>
                <FaHandHoldingDollar />
                <span>Payment Method</span>
            </div>

            <div className='flex items-center'>
                <IoMdSettings />
                <span>Setting</span>
            </div>

            <div className='flex items-center'>
                <GoSignOut />
                <span>Sign Out</span>
            </div>
         </div>            
        </div>
    );
};

export default BottomPortion;