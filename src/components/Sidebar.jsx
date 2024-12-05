import React from "react";
import Logo from "./Logo";
import SidebarButtons from "./SidebarButtons";
import SideBarFooter from "./SideBarFooter";

const Sidebar = ({ dashboard, changeDashboard }) => {
  return (
    <article className='h-screen w-max-[25%] fixed bg-white'>
      <div className='flex flex-col h-full justify-between items-left px-6 py-5'>
        <div>
          <Logo />
          <SidebarButtons
            dashboard={dashboard}
            changeDashboard={changeDashboard}
          />
        </div>
        <SideBarFooter
          dashboard={dashboard}
          changeDashboard={changeDashboard}
        />
      </div>
    </article>
  );
};

export default Sidebar;
