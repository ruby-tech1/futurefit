import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='w-full py-2 px-4 h-[10%] min-h-20 bg-white text-grey-700 flex items-center border-2 border-grey-100'>
      <div className='flex flex-row w-[65%] h-[80%] bg-grey-300 border-grey-300 rounded-lg transition-all hover:border-orange border-2'>
        <div className='w-[10%] h-full flex items-center justify-center'>
          <IoSearchSharp className='text-xl text-grey-500' />
        </div>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search here...'
          className='h-full w-[95%] bg-grey-300 outline-none rounded-lg text-normal placeholder:capitalize placeholder:text-grey-500 placeholder:font-normal'
        />
      </div>
    </div>
  );
};

export default SearchBar;
