import React from "react";
import Link from "next/link";
const Category = ({ titleStyle, categories }) => {
  return (
    <div className="w-full flex flex-col gap-y-[14px]">
      <div
        className={`text-xl font-bold ${titleStyle} relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3`}
      >
        Category
      </div>
      <div
        className={`flex flex-col justify-start items-start text-sm gap-y-3 ${titleStyle} pt-3`}
      >
        {[1, 2, 3, 4, 5, 6].map((category, i) => (
          <li className="list-none" key={i}>
            <Link href="#">Sports ({i+1})</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Category;
