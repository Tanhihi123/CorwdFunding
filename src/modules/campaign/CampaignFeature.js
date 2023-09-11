import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-x-[1048px] pr-[300px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory
          text="Architecture"
          className="text-sm mb-4"
        ></CampCategory>
        <CampTitle className="mb-4 font-bold text-xl">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
