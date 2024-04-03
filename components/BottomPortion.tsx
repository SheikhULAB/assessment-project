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
              <TbKarate size={24} />
              <span className='ml-2 sm:ml-4'>Karate Course</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
              <MdCastForEducation size={24} />  
              <span className='ml-2 sm:ml-4'>Online Courses</span>    
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <LiaVideoSolid size={24} />
                <span className='ml-2 sm:ml-4'>Videos</span>
            </div>           

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GoContainer size={24} />
                <span className='ml-2 sm:ml-4'>Equipments</span>
            </div>   

             <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GiConfrontation size={24} />
                <span className='ml-2 sm:ml-4'>Competition</span>
            </div>

          </div>

          <div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-4 sm:mt-8'>
                <FaHeart size={24} />
                <span className='ml-2 sm:ml-4'>Your Favourite</span>
            </div>   

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <IoIosNotifications size={24} />
                <span className='ml-2 sm:ml-4'>Notification</span>
            </div>

            <div className='flex items-center text-[#F6F6F6] p-3 mt-1.5 bg-[#26235B]'>
                <RiAdminFill size={24} />
                <span className='ml-2 sm:ml-4'>My Profile</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <FaHandHoldingDollar size={24} />
                <span className='ml-2 sm:ml-4'>Payment Method</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <IoMdSettings size={24} />
                <span className='ml-2 sm:ml-4'>Setting</span>
            </div>

            <div className='flex items-center bg-[#E9E9EF] p-3 mt-1.5'>
                <GoSignOut size={24} />
                <span className='ml-2 sm:ml-4'>Sign Out</span>
            </div>
         </div>            
        </div>
    );
};

export default BottomPortion;
