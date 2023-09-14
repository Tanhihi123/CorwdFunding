import { defaultImg } from "constants/Global";
import React from "react";
import CampTitle from "./parts/CampTitle";
import { Button } from "components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 items-start">
        <img
          src={defaultImg}
          alt=""
          className="h-[232px] object-cover rounded-xl w-full"
        />
        <div className="p-5">
          <span className="inline-block bg-secondary text-white font-medium text-xs rounded px-3 py-1 mb-5">
            Featured
          </span>
          <CampTitle className="text-xl mb-1 font-semibold">
            Special One Camera
          </CampTitle>
          <div className="flex items-center gap-x-3 mb-4">
            <span className="font-bold text-text1">$2,724 USD</span>
            <span className="text-sm text-error line-through">$1,504 USD</span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <strong>Estimated Shipping</strong>
            <span className="text-text2">October 2022</span>
          </div>
          <p className="text-text2 mb-4">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2 mb-4">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="bg-secondary text-white w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
