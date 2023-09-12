import { Button } from "components/button";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";

const CampaignPage = () => {
  return (
    <LayoutDashboard>   
      <div className="mb-10 bg-white rounded-2xl flex items-center justify-between py-8 px-10">
        <div className="flex items-start gap-x-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary bg-opacity-60 text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold  mb-2">Create Your Campaign</h1>
            <p className="font-normal text-text3 text-sm mb-2">Jump right into our editor and create your first Virtue campaign!</p>
            <p className="font-normal text-primary text-sm">Need any help? Learn More...</p>
          </div>
        </div>
       <Button type="button" className="px-8" kind="ghost" href="/start-campaign">Create campaign</Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="campaign">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default CampaignPage;
