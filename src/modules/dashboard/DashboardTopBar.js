import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";
const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <Link to="/" className="inline-block">
          <img src="/Logo.png" alt="logo" />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
        <DashboardFund></DashboardFund>
        <Button
          className="px-6"
          type="button"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img
          src="/Logo.png"
          alt="avatar"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
