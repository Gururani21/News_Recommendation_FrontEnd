import CardWithTopImg from "@/components/ui/Card/CardWithTopImg";
import DivSeprater from "@/components/ui/DivSeprater/DivSeprater";
import Link from "next/link";
import React from "react";

const CategoryPages = () => {
  const renderCategoryName = () => {
    return (
      <div className='pt-16 px-8'>
        <h2 className='text-3xl font-bold  text-[color:var(--ast-global-color-0)]'>
          Politics
        </h2>
        <div className='border-b-2  my-8'></div>
      </div>
    );
  };

  const renderCardsList = () => {
    return Array.from(Array(10).keys()).map((item, i) => (
      <CardWithTopImg key={i} />
    ));
  };

  const renderRecentlyViewed = () => {
    return Array.from(Array(5).keys()).map((item, i) => (
      <Link
        href={""}
        className='text-[color:var(--ast-global-color-0)] text-xs'
      >
        The Frightening Affect of Climate Change on Government
      </Link>
    ));
  };
  return (
    <div>
      <div className='grid grid-cols-4 gap-8'>
        <div className='col-span-3 pr-12 border-r-2 '>
          <div className=''>{renderCategoryName()}</div>
          <div className=''>
            <div className='grid grid-cols-1 gap-8 pr-12 '>
              {renderCardsList()}
            </div>
          </div>
        </div>
        <div className='my-4'>
          <div className=''>
            <div className=''>
              <h2 className='text-xl font-bold  text-[color:var(--ast-global-color-3)]'>
                Recently Viewed
              </h2>
            </div>

            <div className='my-4 grid gap-2'>{renderRecentlyViewed()}</div>
            <div className='border-b-2  my-8'></div>
          </div>
          <div className=''>
            <div className=''>
              <h2 className='text-xl font-bold  text-[color:var(--ast-global-color-3)]'>
                Trending News
              </h2>
            </div>

            <div className='my-4 grid gap-2'>{renderRecentlyViewed()}</div>
            <div className='border-b-2  my-8'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPages;
