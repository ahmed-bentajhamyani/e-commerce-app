import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { memo, useState } from "react";
import { Product } from "../types/Product";
import { useNavigate } from "react-router-dom";
import { useWishlistContext } from "@/context/WishlistContext";

export interface IProductCard {
  style?: string;
  data: Product;
}

export default memo(function ProductCard({ style, data }: IProductCard) {
  const { isProductInWishlist, addWishlistProduct, removeWishlistProductById } = useWishlistContext();
  const [isWished, setIsWished] = useState(isProductInWishlist(data.id));
  const navigate = useNavigate();
  const toggleWished = () => {
    if (isWished) {
      removeWishlistProductById(data.id);
      setIsWished(false);
    }
    else {
      addWishlistProduct(data);
      setIsWished(true)
    }
  };

  return (
    <article className={`flex flex-col col-span-1 m-2 ${style}`}>
      <div className="relative hover:[&>a>img]:scale-100 overflow-hidden hover:border border- border-[#EBEBEB] border-solid">
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
          onClick={toggleWished}
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
        <p className="font-semibold">{data?.price} $</p>
      </div>
    </article>
  );
});
