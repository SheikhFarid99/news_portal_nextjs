import React from "react";
import Image from "next/image";
import Link from "next/link";
const { convert } = require('html-to-text');

const SimpleDetailsNewCard = ({ news, type, height }) => {
  return (
    <div className="bg-white shadow">
      <div className="group relative overflow-hidden">
        <div
          style={{ height: `${height}px` }}
          className={`w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <Image
            className=""
            layout="fill"
            src={
              news?.image
            }
            alt="images"
          />
        </div>
        <div
          className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"

        ></div>
        <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
        </div>
      </div>
      <div className="p-5">
        <Link
          className="text-[15px] font-semibold text-[#333333] hover:text-[#c80000]"
          href={`/news/${news?.slug}`}
        >
          {news?.title}
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>{news?.date}</span>
          <span>{news?.writerName}</span>
        </div>
        {type === "details-news" && (
          <p className="text-sm text-slate-600 pt-3">
            {
              convert(news?.description).slice(0, 200)

            }
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleDetailsNewCard;
