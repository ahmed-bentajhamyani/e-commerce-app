import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";
import { Button } from "../Button";
import CartProductCard from "./CartProductCard";
import ProductService from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const {
    cartQuantity,
    cartProducts,
    deleteAll,
    showCart,
    setShowCart
  } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProducts().then((res) => setProducts(res?.data))
  }, []);

  const checkout = () => {
    deleteAll();
    setShowCart(false);
    navigate('/');
  }

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center overflow-hidden text-primary bg-bg-secondary fixed w-4/5 sm:w-2/3 lg:w-2/5 h-screen top-0 right-0 z-50 transition-all duration-500 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/*header*/}
        <div className="flex items-center justify-between p-4 w-full border-b">
          <h3 className="text-xl font-semibold">Your cart</h3>
          <Button
            action={() => setShowCart(false)}
            style="hover:opacity-40"
            iconStyle="text-2xl"
            icon={
              <svg
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            }
          />
        </div>

        {/*body*/}
        <div className="relative flex-auto p-4 overflow-y-auto w-full border-b">
          {/* header */}
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">{cartQuantity} Articles</p>
            <Button
              action={() => deleteAll()}
              style={"font-medium text-sm hover:opacity-40"}
              text={"Supprimer tous"}
            />
          </div>

          {cartProducts.map((cartProduct: CartItem, index: number) => {
            const product: Product = products.find((p) => p.id === cartProduct.id)!;
            if (product) {
              return (
                <CartProductCard key={index} product={product} cartProduct={cartProduct} />
              );
            }

          })}
        </div>

        {/*footer*/}
        <div className="flex flex-col items-center justify-end w-full p-4">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="font-semibold text-sm">Sous-total</span>
            <span className="font-semibold text-lg">
              {cartProducts.reduce((total: number, cartProduct: Product) => {
                const product = products.find((a) => a.id === cartProduct.id);
                return total + (product?.price || 0) * cartProduct.quantity;
              }, 0).toFixed(2)}{" "} Dhs
            </span>
          </div>
          <Button
            action={checkout}
            style="flex justify-center items-center w-full px-10 py-3 space-x-1 text-white bg-primary rounded-none hover:opacity-80 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
            text="Checkout"
            disabled={cartProducts.length < 1}
          />
        </div>
      </div>
      <div onClick={() => setShowCart(false)} className={`opacity-50 fixed inset-0 z-40 bg-black ${showCart ? '' : 'hidden'}`}></div>
    </>
  );
}
