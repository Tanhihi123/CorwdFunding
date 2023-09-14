import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white w-full shadow-1 py-7 px-6 flex flex-col justify-center rounded-[10px]">
        <p className="text-xl mb-8 text-text3 text-center">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="text-lg font-medium px-5 py-3 border border-strock w-full rounded-md mb-5"
        ></Input>
        <div className="w-full rounded-xl flex flex-col gap-y-5 p-5 bg-[#F6F6F6] mb-5">
          <h2 className="text-sm font-semibold text-text2">
            Back it because you believe in it.
          </h2>
          <p className="text-sm font-normal text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary" className="px-[159px]">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
