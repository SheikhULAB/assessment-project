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

            <div className='flex items-center bg-[#E9E9EF] p-3'>
              <TbKarate />
              <span className='ml-4'>Karate Course</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
              <MdCastForEducation />  
              <span className='ml-4'>Online Courses</span>    
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <LiaVideoSolid />
                <span className='ml-4'>Videos</span>
            </div>           

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GoContainer />
                <span className='ml-4'>Equipments</span>
            </div>   

             <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GiConfrontation />
                <span className='ml-4'>Competition</span>
            </div>

          </div>

          <div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-8'>
                <FaHeart />
                <span className='ml-4'>Your Favourite</span>
            </div>   

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <IoIosNotifications />
                <span className='ml-4'>Notification</span>
            </div>

            <div className='flex items-center text-[#F6F6F6] p-3 mt-1.5 bg-[#26235B]'>
                <RiAdminFill />
                <span className='ml-4'>My Profile</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <FaHandHoldingDollar />
                <span className='ml-4'>Payment Method</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <IoMdSettings />
                <span className='ml-4'>Setting</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GoSignOut />
                <span className='ml-4'>Sign Out</span>
            </div>
         </div>            
        </div>
    );
};

export default BottomPortion;