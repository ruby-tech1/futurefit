import React from "react";
import { MdLogout } from "react-icons/md";

const UserSection = ({ username, email, handleLogout }) => {
  return (
    <div className='flex flex-row mt-8 items-center gap-4'>
      <div className='rounded-full p-3 bg-grey-400 relative cursor-pointer'>
        <p className='z-0'>MI</p>
        <span className='absolute w-3 h-3 bottom-0 right-0 rounded-full bg-orange z-40'></span>
      </div>
      <div className='font-medium'>
        <p className='capitalize'>username</p>
        <p className='text-grey-500'>username@gmail.com</p>
      </div>
      <button onClick={handleLogout}>
        <MdLogout className='text-2xl hover:text-orange transition-all' />
      </button>
    </div>
  );
};

export default UserSection;
