import CardWithTopImg from "@/components/ui/Card/CardWithTopImg";
import React from "react";

const NewsArticle = () => {
  const renderMustReadCards = () => {
    return Array.from(Array(5).keys()).map((item, i) => (
      <CardWithTopImg key={i} />
    ));
  };
  return (
    <div>
      <div className=' bg-[color:var(--ast-global-color-4)] pb-8'>
        <div className='max-w-3xl mx-auto bg-[color:var(--ast-global-color-5)] pb-12'>
          <div className='w-4/5 mx-auto'>
            <div className=' h-full  mx-auto  my-8'>
              <img
                src='https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-editor-pick-img-3.jpg'
                className='rounded-sm'
              />
            </div>

            <div className=''>
              <h2 className='text-xl  font-semibold'>
                The Frightening Affect of Climate Change on Government
              </h2>

              <span className='text-xs text-[color:var(--ast-global-color-0)] '>
                Leave a Comment / Editors Pick, Politics / By akbarh
              </span>

              <div className='my-8'>
                <p className='text-sm text-[color:var(--ast-global-color-3)]'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                  porro reiciendis alias laboriosam rerum nesciunt laborum
                  corrupti quia at ratione natus, enim dolorum laudantium ipsa
                  praesentium unde aliquam cumque. Accusamus! lor Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aut porro
                  reiciendis alias laboriosam rerum nesciunt laborum corrupti
                  quia at ratione natus, enim dolorum laudantium ipsa
                  praesentium unde aliquam cumque. Accusamus! lor Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aut porro
                  reiciendis alias laboriosam rerum nesciunt laborum corrupti
                  quia at ratione natus, enim dolorum laudantium ipsa
                  praesentium unde aliquam cumque. Accusamus! lor Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Aut porro
                  reiciendis alias laboriosam rerum nesciunt laborum corrupti
                  quia at ratione natus, enim dolorum laudantium ipsa
                  praesentium unde aliquam cumque. Accusamus! lor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-3xl mx-auto bg-[color:var(--ast-global-color-4)] mt-12'>
          <h2 className='text-2xl font-bold  text-[color:var(--ast-global-color-0)] my-8'>
            Must Read
          </h2>
          <div className='grid grid-cols-3 gap-4'>{renderMustReadCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
