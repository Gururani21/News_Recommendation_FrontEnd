import Logoicon from "@/components/icon/Logoicon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navList = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Technology",
    to: "/",
  },
  {
    title: "Health",
    to: "/",
  },
  {
    title: "Automobile",
    to: "/",
  },
  {
    title: "Stock Market",
    to: "/",
  },
  {
    title: "Politics",
    to: "/",
  },
];
const Header = () => {
  const renderNavList = () => {
    return navList.map((navitem) => (
      <div className='mx-8 text-[color:var(--ast-global-color-3)] font-light'>
        <Link href={navitem.to}>{navitem.title}</Link>
      </div>
    ));
  };
  return (
    <nav className='px-12 max-w-screen-xl mx-auto'>
      <div className='flex justify-between my-4 items-center'>
        <div className=''></div>
        <div className=''>
          {/* <Image src='/logo.svg' alt='logo' width={200} height={80} /> */}
          <Logoicon />
        </div>
        <div className=''>
          <button className='px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200'>
            Login
          </button>
        </div>
      </div>

      <div className=''>
        <div className='flex justify-center'> {renderNavList()} </div>
      </div>
    </nav>
  );
};

export default Header;
