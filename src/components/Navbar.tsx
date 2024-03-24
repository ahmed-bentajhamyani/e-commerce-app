
import { useEffect } from "react";
import { useState } from "react";
import Topbar from './topbar.tsx'
import Logo from "./logo.tsx";
import { useCart } from "../context/CartContext.tsx";

function Navbar() {

  const [isFixed, setIsFixed] = useState(false);
  const [showSearch, setshowSearch] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 140) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

  }, []);

  const { setShowCart } = useCart();

  return (
    <header>
      <Topbar />
      <Logo />


      <nav className={`transition-all duration-[0.25S] ${isFixed ? 'h-14 top-0 pr-[47px] fixed w-full bg-white shadow-sm justify-between' : 'h-20 mb-9 pr-[50px]'} flex justify-end`}>
        <img className={`${isFixed ? '' : 'hidden'} mt-4 ml-6 h-6`} src="/logo.png">

        </img>
        <div className={` ${showSearch ? 'block' : 'hidden'} w-full flex items-center justify-center`}>
          <input className="w-[50%] h-full focus:outline-none text-xl" placeholder="SEARCH & HIT ENTER . . ." />
          <span className=" text-gray-700" onClick={() => setshowSearch(false)}>
            <svg
              className="w-5 h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
        </div>
        <div className={` transition-all duration-[0.25S] ${showSearch ? 'hidden' : 'block'} flex justify-end`}>

          <ul className={`transition-all duration-[0.25S] ${isFixed ? 'gap-x-4' : 'gap-x-5'} flex h-full items-center justify-end text-sm`}>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                NEW IN
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                CLOTHING
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                FOOTWEAR
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                ACCESSORIES
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                BAGS
              </span>
            </li>
            <li className=" cursor-pointer text-red-500">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                Sale
              </span>
            </li>
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                DESIGNERS
              </span>
            </li>
          </ul>
          <ul className="flex ml-3">
            <li onClick={() => setshowSearch(true)} className={`transition-all duration-[0.25S] ${isFixed ? 'pr-4 pl-4' : 'pr-6 pl-6'} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
              <img className="h-7" src="../../public/searchIcon.svg">

              </img>
            </li>
            <li className={`transition-all duration-[0.25S] ${isFixed ? 'pr-4 pl-4' : 'pr-6 pl-6'} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
              <img className="h-7" src="../../public/heartIcon.png">
              </img>
            </li>
            <li onClick={() => setShowCart(true)} className={`transition-all duration-[0.25S] ${isFixed ? 'pr-4 pl-4' : 'pr-6 pl-6'} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
              <img className="h-7" src="../../public/handBadIcon.png">
              </img>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

