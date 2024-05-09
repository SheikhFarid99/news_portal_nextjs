import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";

const DetailsNewsRow = ({ news, category, type }) => {
  return (
    <div className="w-full flex flex-col gap-[14px] pr-2">
      <Title title={category} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <SimpleDetailsNewCard news={news[0]} type={type} height={300} />
        <div className="grid grid-cols-1 gap-y-3">
          {news.map((item, i) => {
            if (i < 4) {
              return <NewsCard item={item} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsNewsRow;
