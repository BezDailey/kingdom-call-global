import React from 'react';
import {ArrowRightIcon} from '@radix-ui/react-icons';

const MinistryListing = () => {
  return (
    <div className='w-full flex hover:cursor-pointer hover:bg-yellow-50 p-2 rounded'>
      <div>
        <h1 className='font-heading'>Youth Outreach</h1>
        <p className='font-body text-sm'>Engaging and empowering the next generation</p>
      </div>
      <div className='ml-auto my-auto'>
        <ArrowRightIcon className="w-6 h-6 ml-auto"/>
      </div>
    </div>
  )
};

export default MinistryListing;
