import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import MenuButton from "./MenuButton";

const SidebarButtons = ({ dashboard, changeDashboard }) => {
  console.log(dashboard);

  return (
    <div className='flex flex-col gap-5 mt-12'>
      <MenuButton
        text={"home"}
        active={dashboard}
        changeDashboard={changeDashboard}
      >
        <GoHomeFill className='text-xl align-bottom' />
      </MenuButton>
      <MenuButton
        text={"Psychometric Tests"}
        active={dashboard}
        changeDashboard={changeDashboard}
      >
        <FaUsers className='text-xl align-bottom' />
      </MenuButton>
      <MenuButton
        text={"Career Recommendations"}
        active={dashboard}
        changeDashboard={changeDashboard}
      >
        <BsMegaphone className='text-xl align-bottom' />
      </MenuButton>
    </div>
  );
};

export default SidebarButtons;
