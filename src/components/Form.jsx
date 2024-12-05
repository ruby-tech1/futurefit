import React, { useState } from "react";
import FormRow from "./FormRow";

const form = ({ values, setValues, isLogin, changeLogin, handleSubmit }) => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (!isLogin) {
    return (
      <article className='flex flex-col justify-center items-center h-full w-6/12 '>
        <div className='w-[70%]'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-4xl font-bold tracking-tighter'>Sign up</h2>
            <p className='text-normal font-light'>
              Already have an account?{"  "}
              <span
                className='text-orange cursor-pointer hover:underline transition-all'
                onClick={changeLogin}
              >
                Login
              </span>
            </p>
          </div>
          <form className='mt-6'>
            <div className='flex flex-col gap-3'>
              {/* <FormRow
                type={"text"}
                name={"firstName"}
                value={values.firstName}
                labelText={"first name"}
                handleChange={handleChange}
              /> */}
              <FormRow
                type={"text"}
                name={"name"}
                value={values.name}
                labelText={"name"}
                handleChange={handleChange}
              />
              <FormRow
                type={"email"}
                name={"email"}
                value={values.email}
                labelText={"email address"}
                handleChange={handleChange}
              />
              <FormRow
                type={"password"}
                name={"password"}
                value={values.password}
                handleChange={handleChange}
              />
              <FormRow
                type={"date"}
                name={"dob"}
                value={values.dob}
                labelText={"Date of Birth"}
                handleChange={handleChange}
              />
              <FormRow
                type={"tel"}
                name={"contactNumber"}
                value={values.contactNumber}
                labelText={"Contact Number"}
                handleChange={handleChange}
              />
              <button className='btn'>submit</button>
            </div>
          </form>
        </div>
      </article>
    );
  }

  return (
    <article className='flex flex-col justify-center items-center h-full w-6/12 '>
      <div className='w-[70%]'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-5xl font-bold tracking-tighter'>Login</h2>
          <p className='text-normal font-light'>
            Don't have an account?{"  "}
            <span
              className='text-orange cursor-pointer hover:underline transition-all'
              onClick={changeLogin}
            >
              Sign up
            </span>
          </p>
        </div>
        <form className='mt-10' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormRow
              type={"email"}
              name={"email"}
              value={values.email}
              labelText={"email address"}
              handleChange={handleChange}
            />
            <FormRow
              type={"password"}
              name={"password"}
              value={values.password}
              handleChange={handleChange}
            />
            <button className='btn' type='submit'>
              submit
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default form;
