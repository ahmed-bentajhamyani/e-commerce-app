
import { useState } from "react";
import { useCart } from "../context/CartContext.tsx";

function Mobnavbar() {

  const [showSearch, setshowSearch] = useState(false);
  const [showList, setshowList] = useState(false);



  const { setShowCart } = useCart();

  return (
    <>
      <nav className="lg:hidden flex justify-between items-center pr-5 pl-5 w-full h-14 bg-white fixed shadow-sm">
        <div onClick={showList ? ()=>setshowList(false) : ()=>setshowList(true)}>
          <img className="h-7 cursor-pointer" src="/orderIcon.png">
          </img>
        </div>
        <div className={` ${showSearch ? 'block' : 'hidden'} w-full flex items-center justify-center`}>
          <input className="w-[50%] h-full focus:outline-none text-lg" placeholder="SEARCH & HIT ENTER . . ." />
          <span className=" text-gray-700 ml-9" onClick={() => setshowSearch(false)}>
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
        <div className={`flex items-center justify-center ${showSearch ? 'hidden' : ''} `}>
          <img className="h-7" src="/logo.png">
          </img>
        </div>
        <div>
          <ul className={`flex ml-3 ${showSearch ? 'hidden' : ''} `}>
              <li onClick={() => setshowSearch(true)} className={`transition-all duration-[0.25S] pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
                <img className="h-5" src="../../public/searchIcon.svg">

                </img>
              </li>
              <li className={`transition-all duration-[0.25S]  pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
                <div className="absolute top-3 right-4 flex items-center justify-center h-4 w-4 bg-black rounded-full text-white">
                  <span className="text-xs">1</span>
                </div>
                <img className="h-5" src="../../public/heartIcon.png">
                </img>

              </li>
              <li onClick={() => setShowCart(true)} className={`transition-all duration-[0.25S] pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}>
                <div className="absolute top-3 right-11 flex items-center justify-center h-4 w-4 bg-black rounded-full text-white">
                  <span className="text-xs">1</span>
                </div>
                <img className="h-5" src="../../public/handBadIcon.png">
                </img>
              </li>
            </ul>
        </div>
        <div className={` ${showList? 'block' : 'hidden'} bg-slate-100 min-w-[100px] absolute top-14 pt-3 pb-3 left-3`}>
          <ul className={` transition-all duration-[0.25S]  gap-2 flex flex-col h-full items-center justify-end text-sm`}>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    NEW IN
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    CLOTHING
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    FOOTWEAR
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    ACCESSORIES
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    BAGS
                  </span>
                </li>
                <li className=" cursor-pointer text-red-500">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    Sale
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                    DESIGNERS
                  </span>
                </li>
              </ul>
         </div>
      </nav>
      </>
      
  )
}

export default Mobnavbar

  
  
