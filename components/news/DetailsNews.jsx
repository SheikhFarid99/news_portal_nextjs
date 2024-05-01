import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";

const DetailsNews = () => {
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2 py-8">
      <Title title="Health" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-x-3">
        <SimpleDetailsNewCard type="details-news" />
        <SimpleDetailsNewCard type="details-news" />
      </div>
    </div>
  );
};

export default DetailsNews;
