import React from "react";
import SearchBar from "./SearchBar";
import DashboardHeroMain from "./DashboardHeroMain";

const DashboardHero = ({ dashboard }) => {
  return (
    <div className='h-full w-full'>
      <SearchBar />
      <DashboardHeroMain dashboard={dashboard} />
    </div>
  );
};

export default DashboardHero;
