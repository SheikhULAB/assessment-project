import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TopPortion = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-4'>
                <Avatar className='w-24 h-24'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className='flex flex-col items-center mt-2 p-3'>
                <span className='mt-2 text-lg font-semibold'>Sheikh Yeamin</span>
                <small className='mt-2 text-xs text-gray-500'>Batch no: KC22041</small>
                <small className='mt-2 text-xs text-gray-500'>Roll no: OKC1122334</small>   
            </div>           
        </div>
    );
};

export default TopPortion;
