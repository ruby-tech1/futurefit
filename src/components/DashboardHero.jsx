import React from "react";
import SearchBar from "./SearchBar";
import DashboardHeroMain from "./DashboardHeroMain";

const DashboardHero = ({ dashboard }) => {
  return (
    <div className='w-full ml-[307px]'>
      <SearchBar />
      <DashboardHeroMain dashboard={dashboard} />
    </div>
  );
};

export default DashboardHero;
