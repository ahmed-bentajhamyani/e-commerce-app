import { useCart } from "../../context/CartContext";
import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";
import { Button } from "../Button";

function CartProductCard({
  product,
  cartProduct,
}: {
  product: Product;
  cartProduct: CartItem;
}) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCart();
  return (
    <div className="flex justify-start items-center space-x-2 lg:space-x-7 p-4 rounded-3xl hover:bg-bg-secondary">
      <img src={product?.image} alt="" className="w-16 md:w-20" />
      <div className="flex flex-1 justify-between items-center">
        <div className="">
          <p className="font-semibold text-base line-clamp-1">
            {product?.product_name}
          </p>
          <p className="text-xs lg:text-sm line-clamp-1">
            {product?.description}
          </p>

          <div className="flex justify-start items-center text-xs lg:text-sm space-x-2">
            <Button
              action={() => decreaseCartQuantity(cartProduct?.id)}
              style="px-1 py-1 cursor-pointer rounded outline-none hover:opacity-40 disabled:opacity-40 disabled:cursor-default"
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
                    d="M5 12h14"
                  />
                </svg>
              }
              disabled={cartProduct?.quantity === 1}
            />

            <span className="text-primary">{cartProduct.quantity}</span>
            <Button
              action={() => increaseCartQuantity(cartProduct.id)}
              style="px-1 py-1 cursor-pointer rounded outline-none hover:opacity-40 disabled:opacity-40 disabled:cursor-default"
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
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              }
              disabled={cartProduct.quantity + 1 > product!.quantity}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold text-sm md:text-lg whitespace-nowrap lg:group-hover:hidden">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(product!.price * cartProduct.quantity)}
          </p>
          <Button
            action={() => removeFromCart(product!.id)}
            style={"cursor-pointer hover:opacity-40"}
            iconStyle={"text-xl"}
            icon={
              <svg
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
