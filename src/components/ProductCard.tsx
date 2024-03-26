import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import useToggleWishlist from "@/hooks/useToggleWishlist";

export interface IProductCard {
  style?: string;
  data: Product;
}

export default memo(function ProductCard({ style, data }: IProductCard) {
  const navigate = useNavigate();

  const { isWished, toggleWishlist } = useToggleWishlist("wishlistProducts", data?.id);

  return (
    <article className={`flex flex-col col-span-1 m-2 ${style}`}>
      <div className="relative hover:[&>a>img]:scale-100 overflow-hidden hover:border border-[#EBEBEB]">
        <a
          className="cursor-pointer"
          onClick={() => navigate(`/product/${data.id}`)}
        >
          <img
            className="transition-all scale-90 w-full"
            src={data.image}
            alt=""
          />
        </a>
        <button
          className="wishlist absolute top-3 right-3 outline-none"
          onClick={() => toggleWishlist()}
        >
          {isWished ? (
            <HeartFilledIcon width={30} height={30} />
          ) : (
            <HeartIcon width={30} height={30} />
          )}
        </button>
      </div>
      <div className="flex flex-col sm:text-sm text-xs transition-all text-center">
        <h2 className="font-black uppercase font-playfair-display">
          {data.product_name}
        </h2>
        <p className="uppercase font-light  ">{data?.description}</p>
        <p className="font-semibold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(data.price)}
        </p>
      </div>
    </article>
  );
});
