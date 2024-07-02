import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";
import Search from "@/components/Search";
import Title from "@/components/Title";
import PopularNews from "@/components/news/PopularNews";
import RecentNews from "@/components/news/RecentNews";
import NewsCard from "@/components/news/items/NewsCard";
import SimpleDetailsNewCard from "@/components/news/items/SimpleDetailsNewCard";
import React from "react";
import { base_api_url } from '../../../../config/config'
import Footer from "@/components/Footer";

const CategoryNews = async ({ params }) => {

  const { category } = params;

  const res = await fetch(`${base_api_url}/api/category/news/${category}`, {
    next: {
      revalidate: 1
    }
  })
  const { news } = await res.json()


  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one="category" two={category} />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {
                    news && news.length > 0 && news.map((item, i) => (
                      <SimpleDetailsNewCard news={item} type="details-news" height={200} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <Search />

                  <RecentNews />
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <PopularNews type="Popular news" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CategoryNews;
