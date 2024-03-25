import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { memo, useEffect, useState } from "react";
import { Product } from "../types/Product";

export interface IProductCard {
  style?: string;
  data: Product;
}

export default memo(function ProductCard({ style, data }: IProductCard) {
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    const values = localStorage.getItem("wishedItems");
    const parsedValues = values ? (JSON.parse(values) as number[]) : [];
    if (parsedValues.includes(data.id)) setIsWished(true);
  }, []);

  const toggleWished = () => {
    const values = localStorage.getItem("wishedItems");
    const parsedValues = values ? (JSON.parse(values) as number[]) : [];
    if (parsedValues.includes(data.id)) {
      localStorage.setItem(
        "wishedItems",
        JSON.stringify(parsedValues.filter((item) => item !== data.id))
      );
      setIsWished(false);
    } else {
      localStorage.setItem(
        "wishedItems",
        JSON.stringify([...parsedValues, data.id])
      );
      setIsWished(true);
    }
  };

  return (
    <article className={`flex flex-col col-span-1 m-2 ${style}`}>
      <div className="relative hover:[&>a>img]:scale-100 overflow-hidden hover:border border- border-[#EBEBEB] border-solid">
        <a href="" className=" cursor-pointer">
          <img
            className="transition-all scale-90 w-full"
            src={data.image}
            alt=""
          />
        </a>
        <button
          className="wishlist absolute top-3 right-3 outline-none"
          onClick={toggleWished}
        >
          {isWished ? (
            <HeartFilledIcon width={30} height={30} />
          ) : (
            <HeartIcon width={30} height={30} />
          )}
        </button>
      </div>
      <div className="flex flex-col xs:text-sm text-xs transition-all md:text-base text-center">
        <h2 className="font-black uppercase font-playfair-display">
          {data.product_name}
        </h2>
        <p className="uppercase font-light  ">{data?.description}</p>
        <p className="font-semibold">{data?.price} $</p>
      </div>
    </article>
  );
});
