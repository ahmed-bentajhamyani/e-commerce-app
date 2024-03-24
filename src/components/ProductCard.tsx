import { HeartIcon } from "@radix-ui/react-icons";
import { Product } from "../types/Product";

export interface IProductCard {
  style?: string;
  data: Product;
}

export default function ProductCard({ style, data }: IProductCard) {
  return (
    <article className={`flex flex-col col-span-1 m-2 ${style}`}>
      <div className="relative hover:[&>a>img]:scale-100 overflow-hidden hover:border border- border-[#EBEBEB] border-solid">
        <a href="" className=" cursor-pointer">
          <img
            className="transition-all scale-90 w-full"
            src={`/images/${data?.image}`}
            alt=""
          />
        </a>
        <div className="wishlist absolute top-3 right-3">
          <HeartIcon width={30} height={30} />
        </div>
      </div>
      <div className="flex flex-col xs:text-sm text-xs transition-all md:text-base text-center">
        <h2 className="font-black uppercase font-playfair-display">
          {data?.product_name}
        </h2>
        <p className="uppercase font-light  ">{data?.description}</p>
        <p className="font-semibold">{data?.price} $</p>
      </div>
    </article>
  );
}
