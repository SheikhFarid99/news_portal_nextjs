import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div className="p-4 bg-white">
      <div className="flex">
        <div className="w-[calc(100%-45px)] h-[45px]">
          <input
            type="text"
            className="w-full h-full p-2 border border-lsate-300 outline-none bg-slate-100"
          />
        </div>
        <div className="w-[45px] h-[45px] flex justify-center items-center bg-red-600 hover:bg-red-700 text-white text-xl">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
