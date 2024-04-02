import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TopPortion = () => {
    return (
        <div>
          <div>
          <Avatar className=''>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col items-center mt-2 p-3'>
            <span className='mt-2'>Sheikh Yeamin</span>
            <span className='mt-4'>Batch no : KC22041</span>
            <span className='mt-4'>Roll no : OKC1122334</span>   
          </div>           
         </div>
    );
};

export default TopPortion;