import React from 'react';
import CertificateCard from './CertificateCard';
import CertificateDesign from './CertificateDesign';

const Certificate = () => {
    return (
        <div>
          <div className='flex'>
           <CertificateCard />
           <CertificateDesign />   
         </div>       
        </div>
    );
};

export default Certificate;