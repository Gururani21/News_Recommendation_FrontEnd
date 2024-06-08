"use client";
import React, { useEffect, useState } from "react";
import CardWithBgImg from "../Card/CardWithBgImg";
import CardWithLeftSideText from "../Card/CardWithLeftSideText";
import axios from "axios";
import appconfig from "@/utils/config";
import { NewsDataType } from "@/types/news";
import Loader from "../Loader";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState<NewsDataType[]>([]);
  const getheroSection = async () => {
    setIsLoading(true);
    const res = (
      await axios.get(appconfig.url + "/getNews", {
        params: { image_url: true, category: "top" },
      })
    ).data;
    console.log(res);
    setdata(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getheroSection();
  },[]);

  const renderleftSide = () => {
    const result = data.slice(1, 4);
    console.log(result);
    return result.map((item) => <CardWithLeftSideText news={item} />);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className= 'my-8'>
      


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='h-full'>
          <CardWithBgImg news={data[0]} />
        </div>
        <div className='grid gap-4'>
          {renderleftSide()}
          {/* <CardWithLeftSideText />
          <CardWithLeftSideText /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
