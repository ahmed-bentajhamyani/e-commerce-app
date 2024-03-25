import { useEffect } from "react";
import { useState } from "react";
import Topbar from "./Topbar.tsx";
import Logo from "./Logo.tsx";
import { useCart } from "../context/CartContext.tsx";
import Mobnavbar from "./Mobnavbar.tsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 140) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartQuantity, setShowCart } = useCart();

  return (
    <header>
      <section className="hidden lg:block">
        <Topbar />
        <Logo />
      </section>

      <nav
        className={`hidden lg:flex transition-all duration-[0.25S] ${isFixed ? " h-14 top-0 pr-[47px] fixed w-full bg-white shadow-sm justify-between" : "h-20 mb-9 pr-[50px]"} flex justify-end`}
      >
        <img
          className={`${isFixed ? "" : "hidden"} mt-4 ml-6 h-6`}
          src="/logo.png"
        ></img>
        <div
          className={` ${showSearch ? "block" : "hidden"} w-full flex items-center justify-center`}
        >
          <input
            className="w-[50%] h-full focus:outline-none text-xl"
            placeholder="SEARCH & HIT ENTER . . ."
          />
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
        <div
          className={` transition-all duration-[0.25S] ${showSearch ? "hidden" : "block"} flex justify-end`}
        >
          <ul
            className={`transition-all duration-[0.25S] ${isFixed ? "gap-x-4" : "gap-x-5"} flex h-full items-center justify-end text-sm`}
          >
            <li className="cursor-pointer">
              <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                NEW IN
              </span>
            </li>
            <li className="cursor-pointer">
              <span
                onClick={() => navigate("/products/clothing")}
                className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
              >
                CLOTHING
              </span>
            </li>
            <li className="cursor-pointer">
              <span
                onClick={() => navigate("/products/footwear")}
                className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
              >
                FOOTWEAR
              </span>
            </li>
            <li className="cursor-pointer">
              <span
                onClick={() => navigate("/products/accessories")}
                className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
              >
                ACCESSORIES
              </span>
            </li>
            <li className="cursor-pointer">
              <span
                onClick={() => navigate("/products/bags")}
                className="after:transition after:ease-in after:duration-200 relative z-10 after:top-7 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
              >
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
            <li
              onClick={() => setshowSearch(true)}
              className={`transition-all duration-[0.25S] ${isFixed ? "pr-4 pl-4" : "pr-6 pl-6"} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
            >
              <svg
                height={28}
                width={28}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 52.966 52.966"
                xmlSpace="preserve"
              >
                <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083 0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z" />
              </svg>
            </li>
            <li
              className={`transition-all duration-[0.25S] ${isFixed ? "pr-4 pl-4" : "pr-6 pl-6"} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
            >
              <div
                className={`${isFixed ? "top-[9px] right-[128px]" : "top-[160px] right-[155px]"} absolute flex items-center justify-center h-5 w-5 bg-black rounded-full text-white`}
              >
                <span className="text-xs">1</span>
              </div>
              <svg
                className="svg-icon"
                width={40}
                height={40}
                style={{ verticalAlign: "middle", overflow: "hidden" }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M893.456828 709.055005" />
                <path d="M491.889987 337.939709" />
                <path d="M568.154951 338.993714" />
                <path d="M527.32401 876.195699c-3.564175 0-7.119141-0.976234-10.256598-2.928702-16.664541-10.379395-408.355455-256.871345-436.366416-500.994342-8.237615-71.78493 15.535835-136.232754 70.656223-191.560874 37.954427-42.778292 91.974761-66.333778 152.175865-66.333778 77.613682 0 158.166299 39.422871 223.789902 108.884896 65.623603-69.462025 146.176221-108.884896 223.780693-108.884896 60.191894 0 114.212228 23.555485 152.157445 66.333778 55.489802 55.698556 79.396281 120.497375 71.045079 192.603623-28.294416 244.245793-420.09073 489.63769-436.754249 499.970012C534.414499 875.228675 530.869766 876.195699 527.32401 876.195699zM303.534108 153.203264c-49.110511 0-92.960205 19.052938-123.463939 53.650921-0.265036 0.302899-0.549515 0.597611-0.833995 0.881067-47.28084 47.28084-66.893526 99.661837-59.954487 160.109558 23.517623 204.964138 346.068853 425.285033 408.061766 465.865263 62.049195-40.456411 384.695592-259.981173 408.393317-464.888006 7.033184-60.750619-12.71151-113.444748-60.352553-161.085792-0.293689-0.284479-0.568958-0.578168-0.833995-0.8913-30.493501-34.588773-74.333986-53.641711-123.44552-53.641711-72.154343 0-148.346653 40.721447-209.021547 111.710244-3.686972 4.313236-9.080819 6.7968-14.759145 6.7968l0 0c-5.678326 0-11.07115-2.483564-14.759145-6.7968C451.889971 193.924711 375.697661 153.203264 303.534108 153.203264z" />
              </svg>
            </li>
            <li
              onClick={() => setShowCart(true)}
              className={`transition-all duration-[0.25S] ${isFixed ? "pr-4 pl-4" : "pr-6 pl-6"} h-full border-l border-gray-300 flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
            >
              <div
                className={`${isFixed ? "top-[9px] right-[60px]" : "top-[160px] right-[70px]"} absolute flex items-center justify-center h-5 w-5 bg-black rounded-full text-white`}
              >
                <span className="text-xs">{cartQuantity}</span>
              </div>
              <svg
                className="svg-icon"
                width={40}
                height={40}
                style={{ verticalAlign: "middle", overflow: "hidden" }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M830.592 284.416C828.736 268.224 815.04 256 798.72 256L639.04 256 639.04 224c0-88.192-71.68-160-159.744-160S319.552 135.808 319.552 224L319.552 256 159.872 256C143.552 256 129.92 268.224 128.128 284.416l-63.936 576c-1.024 9.088 1.92 18.112 8 24.96C78.272 892.096 86.848 896 95.936 896l766.72 0c9.088 0 17.728-3.904 23.808-10.624 6.016-6.784 8.96-15.872 7.936-24.96L830.592 284.416zM383.488 224c0-52.928 43.008-96 95.808-96 52.864 0 95.872 43.072 95.872 96L575.168 256 383.488 256 383.488 224zM131.712 832l56.832-512 131.072 0 0 96c0 17.664 14.336 32 32 32 17.6 0 31.936-14.336 31.936-32L383.552 320l191.68 0 0 96C575.168 433.664 589.44 448 607.104 448c17.6 0 31.936-14.336 31.936-32L639.04 320l131.136 0 56.832 512L131.712 832z" />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      <Mobnavbar />
    </header>
  );
}

export default Navbar;
