import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";

const DetailsNews = ({category,news}) => {
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2 py-8">
      <Title title={category} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-x-3">
        <SimpleDetailsNewCard news={news[0]} type="details-news" height={300} />
        <SimpleDetailsNewCard news={news[1]} type="details-news"  height={300} />
      </div>
    </div>
  );
};

export default DetailsNews;
