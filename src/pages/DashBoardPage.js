import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React from "react";
import {v4} from "uuid";
const DashBoardPage = () => {
  return (
    <>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4).fill(0).map(item => (
          <CampaignItem key={v4()}></CampaignItem>
        ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4).fill(0).map(item => (
          <CampaignItem key={v4()}></CampaignItem>
        ))}
      </CampaignGrid>
    </>
  );
};

export default DashBoardPage;
