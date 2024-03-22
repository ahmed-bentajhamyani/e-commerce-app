
function Navbar() {

 
    return (
      <header>
        <div className="top-bar w-full bg-black h-11 text-white text-right text-sm font-semibold flex justify-end pr-12 ">
            <div className=" h-full  w-32 text-center pt-3 cursor-pointer ">MY ACCOUNT
            </div>
        </div>
        
        <div className="h-24 flex items-center justify-center">
          <img className="h-9" src="../../public/logo.png">
            </img>
        </div>
        
        <div className="h-20 mb-9 flex justify-end mr-20">
          <ul className="flex h-full gap-x-5 items-center justify-end text-sm">
            <li>NEW IN</li>
            <li>CLOTHING</li>
            <li>FOOTWEAR</li>
            <li>ACCESSORIES</li>
            <li>BAGS</li>
            <li className="text-red-500">SALE</li>
            <li>DESIGNERS</li>
            </ul>
            <ul className="flex ml-3">
              <li className=" h-full pr-6 pl-6 border-l border-gray-300 flex items-center justify-center ">
                <img className="h-7" src="../../public/searchIcon.svg">

                </img>
              </li>
            <li className=" h-full border-l pr-6 pl-6 border-gray-300 flex items-center justify-center"><img className="h-7" src="../../public/heartIcon.png"></img></li>
            <li className=" h-full pr-6 pl-6 border-l border-gray-300 flex items-center justify-center"><img className="h-7" src="../../public/handBadIcon.png"></img></li>
          </ul>
        </div>
      </header>
    )
  }
  
  export default Navbar
  