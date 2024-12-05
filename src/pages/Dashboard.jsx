import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHero from "../components/DashboardHero";
import { useAppContext } from "../context/appContext.jsx";

const Dashboard = () => {
  const { dashboard, changeDashboard } = useAppContext();

  return (
    <section className='flex flex-row h-screen w-screen bg-grey-100'>
      <Sidebar dashboard={dashboard} changeDashboard={changeDashboard} />
      <DashboardHero dashboard={dashboard} />
    </section>
  );
};

export default Dashboard;
