import LeftSide from '@/components/LeftSide';
import Navbar from '@/components/Navbar';
import React from 'react';
import { LiaCertificateSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import Certificate from '@/components/Certificate';
import Link from 'next/link';

const Certificates = () => {
    return (
        <div className='flex'>
            
            <LeftSide />
            
            <div>
            <Navbar /> 
            <div className='flex items-center'>
                <div className='flex items-center'>
                  <LiaCertificateSolid />
                  <Link href="/certificates">My Certificate</Link>
                </div>

                <div className='flex items-center ml-8'>
                  <FaBars />
                   <Link href="/certificates">Transcript</Link>
                </div>
            </div>

            <Certificate />
            </div>
        </div>
    );
};

export default Certificates;