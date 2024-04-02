import React from 'react';
import TopPortion from './TopPortion';
import BottomPortion from './BottomPortion';

const LeftSide = () => {
    return (
        <div className='w-[20%] m-2 p-6'>
            <TopPortion />
            <BottomPortion />
        </div>
    );
};

export default LeftSide;