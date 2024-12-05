import React from "react";
import MenuButton from "./MenuButton";
import { MdOutlineSettings } from "react-icons/md";
import UserSection from "./UserSection";

const SideBarFooter = ({ dashboard, changeDashboard }) => {
  return (
    <div className=''>
      <MenuButton
        text={"Settings"}
        active={dashboard}
        changeDashboard={changeDashboard}
      >
        <MdOutlineSettings className='text-xl align-bottom' />
      </MenuButton>
      <UserSection />
    </div>
  );
};

export default SideBarFooter;
