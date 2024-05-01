import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1e1919]">
        <div className="px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1">
          <div className="w-full">
            <div className="w-full flex flex-col gap-y-[14px]">
              <Image
                className=""
                width={200}
                height={100}
                src={logo}
                alt="logo"
              />
              <h2 className="text-slate-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
              <h2 className="text-slate-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</h2>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
