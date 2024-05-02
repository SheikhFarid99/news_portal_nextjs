import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import Category from "./Category";
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
              <h2 className="text-slate-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h2>
              <h2 className="text-slate-300">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur.
              </h2>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-[14px]">
            <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
              Gallery
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, i) => (
                <div key={i} className="w-full h-[85px] relative">
                  <Image
                    className=""
                    layout="fill"
                    src={
                      "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg"
                    }
                    alt="images"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Category categories={[]} titleStyle="text-white" />
          </div>
          <div className="w-full flex flex-col gap-y-[14px]">
            <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
              Recent news
            </div>
            <div className="grid grid-cols-1 gap-y-4 pt-3">
              {[1, 2, 3, 4].map((r, i) => (
                <Link key={i} href={"#"} className="flex gap-x-2">
                  <div className="group relative overflow-hidden w-[90px] h-[75px]">
                    <div className="w-[90px] h-[75px] block group-hover:scale-[1.1] transition-all duration-[1s]">
                      <Image
                        className=""
                        layout="fill"
                        src={
                          "https://res.cloudinary.com/dpj4vsqbo/image/upload/v1696951679/news/btbfqrvjqhso6n842reb.jpg"
                        }
                        alt="images"
                      />
                      <div
                        className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
                        href={"#"}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <h2 className="text-sm font-semibold text-white hover:text-[#c80000]">
                      Dawid Malan The consistent one among freaks
                    </h2>
                    <div className="flex gap-x-2 text-xs font-normal text-white">
                      <span>October 6, 2023</span>
                      <span>Anamul Islam</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
