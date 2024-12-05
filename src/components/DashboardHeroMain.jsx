import React from "react";
import DashBoardHome from "./DashBoardHome";

const DashboardHeroMain = ({ dashboard }) => {
  if (dashboard == "Psychometric Tests") {
    return <div>Psychometric Tests</div>;
  }

  if (dashboard == "Career Recommendations") {
    return <div>Career Recommendations</div>;
  }

  if (dashboard == "Settings") {
    return <div>Settings</div>;
  }

  return (
    <div className='w-full p-6'>
      <DashBoardHome />
    </div>
  );
};

export default DashboardHeroMain;
