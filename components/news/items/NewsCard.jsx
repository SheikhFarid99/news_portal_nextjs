import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = () => {
  return (
    <div className="bg-white shadow flex gap-x-2 p-4">
      <div className="relative group overflow-hidden h-full">
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[160px] h-[93px] lg:w-[100px] relative">
          <Image
            className=""
            layout="fill"
            src={
              "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg"
            }
            alt="images"
          />
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <Link href={"#"} className="text-sm font-semibold text-[#c80000]">
          Sports
        </Link>
        <Link
          href={"#"}
          className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
        >
          Dawid Malan The consistent one among freaks
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>October 6, 2023</span>
          <span>Anamul Islam</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
