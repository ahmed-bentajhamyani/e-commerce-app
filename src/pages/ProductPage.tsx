import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { useCart } from "../context/CartContext";
import ProductService from "../services/ProductService";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import SwiperBox from "../components/SwiperBox";
import { VirtualizedList } from 'sqli-react-virtualized-list';
import useToggleWishlist from "../hooks/useToggleWishlist";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import ShoppingCart from "@/components/icons/ShoppingCart";

export default function ProductPage() {
  const { id } = useParams();

  const containerHeight = '350px';
  const containerWidth = '100%';
  const columnWidth = 180;

  const [product, setProduct] = useState<Product>();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const { increaseCartQuantity, setShowCart } = useCart();

  const { isWished, toggleWishlist } = useToggleWishlist("wishlistProducts");

  useEffect(() => {
    if (id)
      ProductService.getProduct(parseInt(id)).then((res) => setProduct(res));
  }, [id]);

  useEffect(() => {
    if (product)
      ProductService.getProductsByCategory(product?.category_id).then((res) =>
        setRelatedProducts(res)
      );
  }, [product]);

  const addToCart = () => {
    if (product?.id) {
      increaseCartQuantity(product.id);
      setShowCart(true);
    }
  };

  function renderProduct(relatedProduct: Product) {
    return (
      <SwiperSlide className="!w-[180px] !md:w-[250px]">
        <ProductCard data={relatedProduct} />
      </SwiperSlide>
    );
  }

  return (
    <section className="p-5 md:p-8 lg:py-5 lg:px-12 xl:px-16">
      <section className="grid md:grid-cols-2 place-items-center">
        <img src={product?.image} alt="" className="h-96" />
        <div className="w-full mt-10 md:mt-2 md:px-5">
          <h2 className="font-playfair-display font-bold text-3xl">
            {product?.product_name}
          </h2>
          <p className="font-extralight">{product?.description}</p>
          <p className="font-extralight text-xs mb-6">
            Style ID {product?.style_id}
          </p>
          <hr />
          <p className="font-bold text-xl my-3">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(product?.price || 0)}
          </p>
          <hr />
          <p className="uppercase font-semibold text-sm text-secondary mt-6">
            COLOR<span className="font-light"> {product?.color}</span>
          </p>

          <div className="lg:grid grid-cols-2 gap-4 mt-6 space-y-3 lg:space-y-0">
            <Button
              action={addToCart}
              style="flex justify-center items-center w-full px-10 py-3 space-x-1 text-sm md:text-base text-white bg-primary rounded-none hover:bg-secondary cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
              text="Add to cart"
              icon={<ShoppingCart />}
            />
            <Button
              action={() => toggleWishlist(product?.id || 0)}
              style="flex justify-center items-center w-full px-10 py-3 space-x-1 text-sm md:text-base bg-bg-secondary rounded-none hover:bg-text-secondary/60 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
              text={`${isWished ? 'Remove from wishlist' : 'Add to wishlist'}`}
              icon={
                isWished ?
                  <HeartFilledIcon width={30} height={30} />
                  :
                  <HeartIcon width={30} height={30} />
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-playfair-display font-bold text-2xl md:text-3xl uppercase text-center">
          Related Products
        </h2>
        <p className="font-extralight text-center">Complete your Outfit</p>
        <SwiperBox>
          <VirtualizedList<Product>
            itemList={relatedProducts?.filter(relatedProduct => relatedProduct.id !== product?.id)}
            scrollDirection={'horizontal'}
            containerHeight={containerHeight}
            containerWidth={containerWidth}
            columnWidth={columnWidth}
            hideScrollbar={true}
            renderItem={renderProduct}
          />
        </SwiperBox>
      </section>
    </section>
  );
}
