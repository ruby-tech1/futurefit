import React from "react";
import { IoDocumentOutline, IoBriefcaseOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import HomeTest from "./HomeTest";

const DashBoardHome = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <h4 className='font-semibold tracking-tighter'>Welcome {"Tolu"},</h4>
      {/*  */}
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
            <button className='p-6 border-grey-300 border-2'>
              <CiEdit className='text-xl text-grey-500 ' />
            </button>
            <div>
              <p className='font-medium'>Take a Test</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='w-full flex flex-row gap-4 items-start'>
        <div className='bg-white w-1/2 p-5 rounded-lg'>
          <p className='font-semibold mb-5'>Recommended Next Steps</p>
          <div className=' flex flex-col gap-y-3'>
            <HomeTest text={"Complete Penalty Test"} test={true}>
              <IoDocumentTextOutline className='text-xl' />
            </HomeTest>
            <HomeTest text={"Explore Career Paths"} test={false}>
              <IoBriefcaseOutline className='text-xl' />
            </HomeTest>
            <HomeTest text={"Update Personal Test"} test={false}>
              <IoDocumentTextOutline className='text-xl' />
            </HomeTest>
          </div>
        </div>
        <div className='bg-white w-1/2 p-5 rounded-lg'>
          <p className='font-semibold mb-5'>Upcoming Assessments</p>
          <div className=' flex flex-col gap-y-3'>
            <HomeTest text={"Holland Code Career Test"} test={true}>
              <IoDocumentTextOutline className='text-xl' />
            </HomeTest>
            <HomeTest text={"Big Five Personality Test"} test={true}>
              <IoDocumentTextOutline className='text-xl' />
            </HomeTest>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
