import React from "react";

const MenuButton = ({ text, children, active, changeDashboard }) => {
  return (
    <button
      onClick={() => changeDashboard(text)}
      className={`flex flex-row space-x-5 text-[1.2rem] outline-none hover:text-orange transition-all ${
        active == text ? "text-orange" : "text-grey-600 "
      }`}
    >
      {children}
      <span className='capitalize tracking-tighter'>{text}</span>
    </button>
  );
};

export default MenuButton;
