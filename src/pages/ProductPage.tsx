import { useState, useEffect } from 'react';
import { Button } from "../components/Button";
import { useCart } from "../context/CartContext";
import ProductService from "../services/ProductService";
import { Product } from '../types/Product';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import SwiperBox from '../components/SwiperBox';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { increaseCartQuantity, setShowCart } = useCart();

  useEffect(() => {
    if (id) ProductService.getProduct(parseInt(id)).then(res => setProduct(res));
  }, [id]);

  useEffect(() => {
    if (product) ProductService.getProductsByCategory(product?.category_id).then(res => setRelatedProducts(res));
  }, [product]);

  const addToCart = () => {
    if (product?.id) {
      increaseCartQuantity(product.id);
      setShowCart(true);
    }
  }

  return (
    <section className="p-5 md:p-10 lg:p-16">
      <section className="grid md:grid-cols-2 place-items-center">
        <img src={`/images/${product?.image}`} alt="" className="h-96" />
        <div className="w-full mt-10 md:mt-2 md:px-5 lg:px-20">
          <h2 className="font-playfair-display font-bold text-3xl">
            {product?.product_name}
          </h2>
          <p className="font-extralight">{product?.description}</p>
          <p className="font-extralight text-xs mb-6">
            Style ID {product?.style_id}
          </p>
          <hr />
          <p className="font-bold text-xl my-3">€ {product?.price}</p>
          <hr />
          <p className="uppercase font-semibold text-sm text-secondary mt-6">
            COLOR<span className="font-light"> {product?.color}</span>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Button
              action={addToCart}
              style="flex justify-center items-center w-full px-10 py-3 mt-6 space-x-1 text-sm md:text-base text-white bg-primary rounded-none hover:bg-secondary cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
              text="Add to cart"
              icon={
                <svg className="svg-icon" width={25} height={25} style={{ verticalAlign: 'middle', fill: '#fff', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M830.592 284.416C828.736 268.224 815.04 256 798.72 256L639.04 256 639.04 224c0-88.192-71.68-160-159.744-160S319.552 135.808 319.552 224L319.552 256 159.872 256C143.552 256 129.92 268.224 128.128 284.416l-63.936 576c-1.024 9.088 1.92 18.112 8 24.96C78.272 892.096 86.848 896 95.936 896l766.72 0c9.088 0 17.728-3.904 23.808-10.624 6.016-6.784 8.96-15.872 7.936-24.96L830.592 284.416zM383.488 224c0-52.928 43.008-96 95.808-96 52.864 0 95.872 43.072 95.872 96L575.168 256 383.488 256 383.488 224zM131.712 832l56.832-512 131.072 0 0 96c0 17.664 14.336 32 32 32 17.6 0 31.936-14.336 31.936-32L383.552 320l191.68 0 0 96C575.168 433.664 589.44 448 607.104 448c17.6 0 31.936-14.336 31.936-32L639.04 320l131.136 0 56.832 512L131.712 832z" />
                </svg>
              }
            />
            <Button
              // action={addToCart}
              style="flex justify-center items-center w-full px-10 py-3 mt-6 space-x-1 text-sm md:text-base bg-bg-secondary rounded-none hover:bg-text-secondary/60 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
              text="Add to wishlist"
              icon={
                <svg className="svg-icon" width={25} height={25} style={{ verticalAlign: 'middle', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M893.456828 709.055005" />
                  <path d="M491.889987 337.939709" />
                  <path d="M568.154951 338.993714" />
                  <path d="M527.32401 876.195699c-3.564175 0-7.119141-0.976234-10.256598-2.928702-16.664541-10.379395-408.355455-256.871345-436.366416-500.994342-8.237615-71.78493 15.535835-136.232754 70.656223-191.560874 37.954427-42.778292 91.974761-66.333778 152.175865-66.333778 77.613682 0 158.166299 39.422871 223.789902 108.884896 65.623603-69.462025 146.176221-108.884896 223.780693-108.884896 60.191894 0 114.212228 23.555485 152.157445 66.333778 55.489802 55.698556 79.396281 120.497375 71.045079 192.603623-28.294416 244.245793-420.09073 489.63769-436.754249 499.970012C534.414499 875.228675 530.869766 876.195699 527.32401 876.195699zM303.534108 153.203264c-49.110511 0-92.960205 19.052938-123.463939 53.650921-0.265036 0.302899-0.549515 0.597611-0.833995 0.881067-47.28084 47.28084-66.893526 99.661837-59.954487 160.109558 23.517623 204.964138 346.068853 425.285033 408.061766 465.865263 62.049195-40.456411 384.695592-259.981173 408.393317-464.888006 7.033184-60.750619-12.71151-113.444748-60.352553-161.085792-0.293689-0.284479-0.568958-0.578168-0.833995-0.8913-30.493501-34.588773-74.333986-53.641711-123.44552-53.641711-72.154343 0-148.346653 40.721447-209.021547 111.710244-3.686972 4.313236-9.080819 6.7968-14.759145 6.7968l0 0c-5.678326 0-11.07115-2.483564-14.759145-6.7968C451.889971 193.924711 375.697661 153.203264 303.534108 153.203264z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-playfair-display font-bold text-2xl md:text-3xl uppercase text-center">Related Products</h2>
        <p className="font-extralight text-center">Complete your Outfit</p>
        <SwiperBox>
          {relatedProducts?.filter(relatedProduct => relatedProduct.id !== product?.id).map((relatedProduct, index) => {
            return (
              <SwiperSlide key={index} className="!w-[180px] !md:w-[250px]">
                <ProductCard data={relatedProduct} />
              </SwiperSlide>
            );
          })}
        </SwiperBox>
      </section>
    </section>
  )
}
