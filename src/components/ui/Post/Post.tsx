"use client";
import React, { useEffect, useState } from "react";
import CardWithTopImg from "../Card/CardWithTopImg";
import PostHeaders from "./PostHeaders";
import Badge from "../Badge/Badge";
import { NewsDataType } from "@/types/news";
import appconfig from "@/utils/config";
import axios from "axios";

const Post = () => {
  const [newslst, setnewslst] = useState<NewsDataType[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const renderBadge = (res: string[]) => {
    return res.map((x) => <Badge text={x.toUpperCase()} />);
  };

  const getNews = async () => {
    setisLoading(true);
    const res = (
      await axios.get(appconfig.url + "/getNews", {
        params: { image_url: true, category: "health" },
      })
    ).data;
    console.log(res);
    setnewslst(res.data);
    setisLoading(false);
  };
  useEffect(() => {
    getNews();
  }, []);

  const renderNews = () => {
    const res = newslst.slice(1, 4);
    return (    
          res.map((x) => <CardWithTopImg news={x} />
    ))
    
  }

  return (
    <div className='pb-8'>
      <PostHeaders title='Health' link='link' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {renderNews()}
        {/* <CardWithTopImg />
        <CardWithTopImg /> */}
      </div>
    </div>
  );
};

export default Post;
