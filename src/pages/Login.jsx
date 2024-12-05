import LoginFlyer from ".././components/LoginFlyer";
import Form from "../components/Form";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
  name: "",
  dob: "",
  contactNumber: "",
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState(initialState);

  const changeLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log(values);
    } else {
      console.log(values);
    }

    setValues({ ...initialState });
  };

  return (
    <section className='flex flex-row h-screen w-screen p-4'>
      <LoginFlyer />
      <Form
        values={values}
        changeLogin={changeLogin}
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        setValues={setValues}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default Login;
