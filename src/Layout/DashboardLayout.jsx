import React from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "../Components/DashComponents/DashSidebar/DashSidebar";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const DashboardLayout = () => {
  return (
    <div className=" overflow-hidden">
      <Header />

      <div className="flex flex-wrap">
       
        <DashSidebar></DashSidebar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
