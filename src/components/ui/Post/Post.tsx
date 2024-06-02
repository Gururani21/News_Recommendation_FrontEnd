import React from "react";
import CardWithTopImg from "../Card/CardWithTopImg";
import PostHeaders from "./PostHeaders";

const Post = () => {
  return (
    <div className='my-8'>
      <PostHeaders />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <CardWithTopImg />
        <CardWithTopImg />
        <CardWithTopImg />
      </div>
    </div>
  );
};

export default Post;
