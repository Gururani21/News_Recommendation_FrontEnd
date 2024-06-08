import React from "react";

export interface PostHeadersPropsType{
  title:string,
  link:string
}
const PostHeaders = ({title, link}:PostHeadersPropsType) => {
  return (
    <div className='my-8 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <div className='text-sm'> View ALL </div>
    </div>
  );
};

export default PostHeaders;
