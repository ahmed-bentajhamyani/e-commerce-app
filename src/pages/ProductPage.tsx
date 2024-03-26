import { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import SwiperBox from "../components/SwiperBox";
import { VirtualizedList } from 'sqli-react-virtualized-list';
import OneProduct from "@/components/OneProduct";

export default function ProductPage() {
  const { id } = useParams();

  const containerHeight = '350px';
  const containerWidth = '100%';
  const columnWidth = 180;

  const [product, setProduct] = useState<Product>();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

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

  function renderProduct(relatedProduct: Product) {
    return (
      <SwiperSlide className="!w-[180px] !md:w-[250px]">
        <ProductCard data={relatedProduct} />
      </SwiperSlide>
    );
  }

  return (
    <section className="p-5 md:p-8 lg:py-5 lg:px-12 xl:px-16">
      {product ? <OneProduct product={product as Product} /> : ""}

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
