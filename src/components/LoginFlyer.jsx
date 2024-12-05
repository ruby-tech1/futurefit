import React from "react";
import flyer from ".././assets/login-flyer.png";
import Logo from "./Logo";

const loginFlyer = () => {
  return (
    <article
      className={`bg-flyer rounded-3xl bg-black h-full w-6/12 text-white`}
    >
      <div className='pt-10 pl-12'>
        <Logo />
        <div className='flex flex-col gap-2 font-sm font-thin leading-5 text-normal w-4/5'>
          <h1 className='capitalize font-semibold mt-20'>
            discover your perfect career path
          </h1>
          <p>
            Unlock your potential with our personalized career guidance. Our
            psychometric assessment will help you identify your strengths,
            weaknesses, and ideal career paths.
          </p>
        </div>
      </div>
    </article>
  );
};

export default loginFlyer;
