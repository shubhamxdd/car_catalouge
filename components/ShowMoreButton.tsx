"use client";

import { ShowMoreButtonProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from ".";
import { updateSearchParams } from "@/utils";

const ShowMoreButton = ({ page, isNext }: ShowMoreButtonProps) => {
  const router = useRouter();
  const handleNav = () => {
    const limit = (page + 1) * 10;
    const newPathName = updateSearchParams("limit", `${limit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNav}
        />
      )}
    </div>
  );
};

export default ShowMoreButton;
