import React from "react";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import { defaultImg } from "constants/Global";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat mb-10 bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold"
        style={{
          backgroundImage: `linear-gradient(179.14deg,rgba(32, 18, 63, 0) -7.14%,#000000 87.01%),url(/BannerImg.png)`,
          borderRadius: "24px",
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-center gap-x-10 w-full max-x-[1066px] pr-[300px] mb-8">
        <div className="flex-1">
          <CampImage className="h-[398px]"></CampImage>
        </div>
        <div className="flex-1 max-w-[435px]">
          <CampCategory
            text="Architecture"
            className="text-sm mb-4"
          ></CampCategory>
          <CampTitle className="mb-4 font-bold text-xl">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex justify-start gap-x-5 ml-[150px] mb-[165px]">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <img
              src={defaultImg}
              alt=""
              className="w-[89px] h-[70px] rounded-lg object-cover"
            />
          ))}
      </div>
      <div className="flex items-center justify-between bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center gap-x-14 font-medium text-text3 text-sm">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button className="px-9" kind="primary">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.5fr,1fr] mb-[70px]">
        <div>
          <h2 className="text-lg font-semibold uppercase">Story</h2>
          <div className="bg-white w-full"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default withErrorBoundary(CampaignView, {
  FallbackComponent: ErrorComponent,
});
