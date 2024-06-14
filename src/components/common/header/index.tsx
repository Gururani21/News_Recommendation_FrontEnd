import { useTheme } from "@/app/context/ThemeContext";
import Logoicon from "@/components/icon/Logoicon";
import CardWithLeftSideText from "@/components/ui/Card/CardWithLeftSideText";
import LoginForm from "@/components/ui/LoginForm/index";
import Modal from "@/components/ui/Modal/index";
import SignupForm from "@/components/ui/SignupForm/index";
import { NewsDataType } from "@/types/news";
import appconfig from "@/utils/config";
import userEvent from "@/utils/userEvent";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    title: "Sports",
    to: "/category/Sports",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  //@ts-ignore
  const { font, backgroundColor, textColor } = useTheme();
  const [data, setdata] = useState<NewsDataType[]>([]);
  const [searchText, setSearchtext] = useState("");
  const search = async (text: string) => {
    // setIsLoading(true);
    const res = (
      await axios.get(appconfig.url + "/searchNews", {
        params: { image_url: true, search: text },
      })
    ).data;
    console.log(res);
    setdata(res.data);
    //setIsLoading(false);
  };
  const setlogin = () => {
    const str = localStorage.getItem("user");
    if (str === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
  };
  useEffect(() => {
    setlogin();
    //userEvent.saveUserEvnet("7d6d2bfd-07fe-4f3a-b2ea-8bc1b37b4292", "History");
  }, []);
  const handleLogin = () => {
    if (isLogin) {
      logout();
    } else {
      setModalOpen(true);
    }
    setIsLogin(!isLogin);
  };

  const renderNavList = () => {
    return navList.map((navitem, i) => (
      <div
        // className='mx-0 md:mx-8 text-[color:var(--ast-global-color-3)] font-light font-semibold'
        key={i}
        className={`mx-0 md:mx-8 ${font} font-semibold`}
      >
        <Link href={navitem.to}>{navitem.title}</Link>
      </div>
    ));
  };
  return (
    <nav className={` px-0 md:px-12 max-w-screen-xl mx-auto`}>
      <div className='flex justify-between md:justify-between py-4 items-center'>
        <div className=''></div>
        <div className=''>
          <Logoicon />
        </div>
        <div className=''>
          <button
            className=' px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200'
            onClick={() => setSearch(!isSearch)}
          >
            Search
          </button>
          <button
            className=' px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200'
            onClick={handleLogin}
          >
            {isLogin ? "Logout" : "LogIn"}
          </button>
        </div>

        <div className='block md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='flex flex-col items-start justify-center md:hidden'>
          <div className='flex flex-col  justify-center'>
            {" "}
            {renderNavList()}{" "}
          </div>
        </div>
      )}

      <div className={`hidden md:block`}>
        <div className='flex justify-center'> {renderNavList()} </div>
      </div>

      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <button
          className='absolute top-2 right-2'
          onClick={() => setModalOpen(false)}
        >
          <MdCancel size={25} />
        </button>
        {
          <>
            <h6 className='mb-4 font-semibold '>Welcome to BUSINESSLY</h6>
            <div className='grid grid-cols-2 gap-2 my-3 '>
              <button
                className={`border border-slate-200 rounded-md px-3 py-1 font-semibold ${
                  isLogin == true
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } `}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`border border-slate-200 rounded-md px-3 py-1 font-semibold ${
                  isLogin == false
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                } `}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
            {isLogin ? <LoginForm /> : <SignupForm />}
          </>
        }
      </Modal>

      <Modal show={isSearch} onClose={() => setSearch(false)}>
        <button
          className='absolute   right-2 '
          onClick={() => setSearch(false)}
        >
          <MdCancel size={25} />
        </button>

        <form className='max-w-md mx-auto'>
          <label
            for='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Mockups, Logos...'
              required
              onChange={(e) => {
                setSearchtext(e.target.value);
              }}
            />
            <button
              type='submit'
              className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={(e) => {
                e.preventDefault();
                search(searchText);
              }}
            >
              Search
            </button>
          </div>
        </form>
        <div className=' mt-8'>
          <div className='h-2/4'>
            {data.slice(1, 3).map((item) => (
              <CardWithLeftSideText news={item} isSearch={true} />
            ))}
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Header;
