import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img src="./Logo.png" alt="logo" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-6" type="button">Start a campaign</Button>
        <img
          src="./Logo.png"
          alt="avatar"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
