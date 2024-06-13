import Logoicon from "@/components/icon/Logoicon";
import LoginForm from "@/components/ui/LoginForm/index";
import Modal from "@/components/ui/Modal/index";
import SignupForm from "@/components/ui/SignupForm/index";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";



const navList = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Technology",
    to: "/category/Technology",
  },
  {
    title: "Health",
    to: "/category/Health",
    
  },
  {
    title: "Automobile",
    to: "/category/Automobile",
  },
  // {
  //   title: "Stock Market",
  //   to: "/",
  // },
  {
    title: "Politics",
    to: "/category/Politics",
  },
];
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const [isLogin, setIsLogin] = useState(true)
 
  const renderNavList = () => {
    
    return navList.map((navitem, i) => (
      <div
        className='mx-0 md:mx-8 text-[color:var(--ast-global-color-3)] font-light font-semibold'
        key={i}
      >
        <Link href={navitem.to}>{navitem.title}</Link>
      </div>
    ));
  };
  return (
    <nav className='px-0 md:px-12 max-w-screen-xl mx-auto'>




      <div className='flex justify-between md:justify-between my-4 items-center'>
        <div className=''></div>
        <div className=''>
   
          <Logoicon />
        </div>
        <div className=''>
          <button 
          className=' px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200'
          onClick = {() => setModalOpen(!modalOpen)}
          >
            Login
          </button>
        </div>
       

        <div className = 'block md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
          </button>

        </div>
      </div>
      {menuOpen && 
        <div className = 'flex flex-col items-start justify-center md:hidden'>
          <div className='flex flex-col  justify-center'> {renderNavList()} </div>
        </div>
}

      <div className='hidden md:block'>
        <div className='flex justify-center'> {renderNavList()} </div>
      </div>

    
        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
          <button className="absolute top-2 right-2" onClick={() => setModalOpen(false)}>
            <MdCancel size={25}/>
          </button>
{
<>
  <h6 className="mb-4 font-semibold ">Welcome to BUSINESSLY</h6>
  <div className="grid grid-cols-2 gap-2 my-3 ">
    <button className = {`border border-slate-200 rounded-md px-3 py-1 font-semibold ${isLogin== true ? 'bg-blue-500 text-white' : 'bg-white text-black'} `}
      onClick = {() => setIsLogin(true)}
    >Login</button>
    <button className = {`border border-slate-200 rounded-md px-3 py-1 font-semibold ${isLogin== false ? 'bg-blue-500 text-white' : 'bg-white text-black'} `}
      onClick = {() => setIsLogin(false)}
    >Sign Up</button>
  </div>
  {
    isLogin 
    ?
    <LoginForm />
    :
    <SignupForm />
  }
  
  </>

}

      
      </Modal>

    </nav>
  );
};

export default Header;
