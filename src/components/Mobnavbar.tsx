import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.tsx";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, signOut } from "@/services/authService.ts";
import { PersonIcon } from "@radix-ui/react-icons";

function Mobnavbar() {
  const navigate = useNavigate();
  const [inputField, setinputField] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [showList, setshowList] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartQuantity, setShowCart } = useCart();

  return (
    <>
      <nav
        className={`lg:hidden flex justify-between transition-all items-center pr-5 pl-5 w-full h-14 bg-white z-10 shadow-sm duration-[0.25S] ${isFixed ? "top-0 fixed " : ""}`}
      >
        <div
          onClick={
            showList ? () => setshowList(false) : () => setshowList(true)
          }
        >
          <img className="h-7 cursor-pointer" src="/orderIcon.png"></img>
        </div>
        <div
          className={` ${showSearch ? "block" : "hidden"} w-full flex items-center justify-center`}
        >
          <input
            onChange={(e) => {
              setinputField(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") navigate(`/search/${inputField}`);
            }}
            className="w-[50%] h-full focus:outline-none text-lg"
            placeholder="SEARCH & HIT ENTER . . ."
          />
          <span
            className=" text-gray-700 ml-9"
            onClick={() => setshowSearch(false)}
          >
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
          onClick={() => {
            navigate("/");
          }}
          className={` cursor-pointer flex items-center justify-center ${showSearch ? "hidden" : ""} `}
        >
          <img className="h-7" src="/logo.png"></img>
        </div>
        <div>
          <ul
            className={`flex justify-center items-center ml-3 ${showSearch ? "hidden" : ""} `}
          >
            <li
              onClick={() => setshowSearch(true)}
              className={`transition-all duration-[0.25S] pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
            >
              <svg
                height={22}
                width={22}
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
              className={`transition-all duration-[0.25S]  pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
              onClick={() => navigate("/wishlist")}
            >
              <svg
                className="svg-icon"
                width={28}
                height={28}
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
              className={`transition-all duration-[0.25S] pr-1 pl-1 h-full flex items-center justify-center transition ease-in duration-100 hover:bg-slate-100 cursor-pointer`}
            >
              <div className="absolute top-3 right-5 flex items-center justify-center h-4 w-4 bg-black rounded-full text-white">
                <span className="text-xs">{cartQuantity}</span>
              </div>
              <svg
                className="svg-icon"
                width={28}
                height={28}
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
        <div
          className={`${showList ? "left-0 z-10 w-full" : "left-[-212px] z-[-10] w-screen"} flex  transition-nav duration-300 h-screen absolute top-0 `}
        >
          {" "}
          <div className={`h-full bg-slate-100 min-w-[200px] `}>
            <ul
              className={` transition-all duration-[0.25S] [&>li]:py-3 [&>li]:h-full flex flex-col  items-center justify-start text-sm px-4`}
            >
              <li className="cursor-pointer">
                <span
                  onClick={() => {
                    navigate("/products/new");
                    setshowList(!showList);
                  }}
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                >
                  NEW IN
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                  onClick={() => {
                    navigate("/products/clothing");
                    setshowList(!showList);
                  }}
                >
                  CLOTHING
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                  onClick={() => {
                    navigate("/products/footwear");
                    setshowList(!showList);
                  }}
                >
                  FOOTWEAR
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                  onClick={() => {
                    navigate("/products/accessories");
                    setshowList(!showList);
                  }}
                >
                  ACCESSORIES
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => {
                    navigate("/products/bags");
                    setshowList(!showList);
                  }}
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                >
                  BAGS
                </span>
              </li>
              <li className=" cursor-pointer text-red-500">
                <span
                  onClick={() => {
                    navigate("/products/suits");
                    setshowList(!showList);
                  }}
                  className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black "
                >
                  SUITS
                </span>
              </li>
              <li>
                <span className="after:transition after:ease-in after:duration-200 relative z-10 after:top-4 hover:after:absolute hover:after:inline-block hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
                  {getCurrentUser() ? (
                    <div className="flex flex-col items-center border p-2">
                      <div className="w-full flex gap-2">
                        <PersonIcon />
                        {getCurrentUser()!.displayName}
                      </div>
                      <div
                        className="cursor-pointer uppercase font-bold"
                        onClick={() => {
                          signOut();
                          navigate(0);
                        }}
                      >
                        Sign Out
                      </div>
                    </div>
                  ) : (
                    <Link className="uppercase font-bold" to={"/login"}>
                      Login
                    </Link>
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setshowList(!showList)}
            className={`${showList ? "block z-10" : "hidden z-0"} flex-1 bg-slate-500 opacity-50`}
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Mobnavbar;
