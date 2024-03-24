import { Button } from "../components/Button";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { increaseCartQuantity } = useCart();
  return (
    <section className="p-5">
      <section className="grid grid-cols-2 place-items-center mt-16">
        <img src="/images/product.jpeg" alt="" className="w-96" />
        <div className="w-full p-20">
          <h2 className="font-playfair-display font-bold text-3xl">
            FERRAGAMO
          </h2>
          <p className="font-extralight">MOCCASIN ORNAMENT GANCINI</p>
          <p className="font-extralight text-xs mb-6">
            Style ID 768074_020350061
          </p>
          <hr />
          <p className="font-bold text-xl my-3">€ 650.00</p>
          <hr />
          <p className="uppercase font-semibold text-sm opacity-70 mt-6">
            COLOR<span className="font-light"> brown</span>
          </p>

          <Button
            action={() => increaseCartQuantity(3)}
            style="flex justify-center items-center w-full px-10 py-3 mt-6 space-x-1 text-white bg-primary rounded-none hover:opacity-80 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
            text="Add to cart"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-playfair-display font-bold text-3xl uppercase text-center">
          Related Products
        </h2>
        <p className="font-extralight text-center">Complete your Outfit</p>
        <div className="grid grid-cols-6 place-items-center gap-8 my-10">
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
          <div className="border border-primary w-48 h-64"></div>
        </div>
      </section>
    </section>
  );
}
