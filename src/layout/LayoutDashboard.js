import Overlay from "components/common/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import React from "react";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <Overlay></Overlay>     
      <DashboardTopBar></DashboardTopBar>
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
