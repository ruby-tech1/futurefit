import React from "react";
import { IoDocumentOutline, IoBriefcaseOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const DashBoardHome = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <h4 className='font-semibold tracking-tighter'>Welcome {"Tolu"},</h4>
      <div className='w-full'>
        <p className='font-bold text-lg'>Quick Stats</p>
        <div className='flex flex-row gap-3 mt-6'>
          <div className='w-4/12 flex flex-row items-center gap-2 bg-white p-6'>
            <div className='p-6 border-grey-300 border-2'>
              <IoDocumentOutline className='text-xl text-grey-500 ' />
            </div>
            <div>
              <p className='font-medium'>Test Taken</p>
              <p className='text-2xl font-bold mt-2'>0</p>
            </div>
          </div>
          <div className='w-4/12 flex flex-row items-center gap-2 bg-white p-6'>
            <div className='p-6 border-grey-300 border-2'>
              <IoBriefcaseOutline className='text-xl text-grey-500 ' />
            </div>
            <div>
              <p className='font-medium'>Career Recommendation</p>
              <p className='text-2xl font-bold mt-2'>0</p>
            </div>
          </div>
          <div className='w-4/12 flex flex-row items-center gap-2 bg-white p-6'>
            <div className='p-6 border-grey-300 border-2'>
              <CiEdit className='text-xl text-grey-500 ' />
            </div>
            <div>
              <p className='font-medium'>Take a Test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
