import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";

const DetailsNewsRow = ({ category, type }) => {
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <Title title={category} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <SimpleDetailsNewCard type={type} />
        <div className="grid grid-cols-1 gap-y-3">
          {[1, 2, 3, 4].map((_, i) => (
            <NewsCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsNewsRow;
