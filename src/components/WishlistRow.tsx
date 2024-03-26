import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";
import { Button } from "./Button";
import Close from "./icons/Close";
import ShoppingCart from "./icons/ShoppingCart";

interface WishlistRowProps {
    wishlistProduct: Product
    callbackFn: () => void;
}

export default function WishlistRow({ wishlistProduct, callbackFn }: WishlistRowProps) {
    const { increaseCartQuantity, setShowCart } = useCart();

    const addToCart = () => {
        if (wishlistProduct?.id) {
            increaseCartQuantity(wishlistProduct.id);
            setShowCart(true);
        }
    };

    return <tr className="border-b-2">
        <td className="py-2">
            <a className="w-max flex" href={`/product/${wishlistProduct?.id}`}>
                <img className="h-36" src={wishlistProduct?.image} alt={wishlistProduct?.description.toUpperCase()} />
            </a>
        </td>
        <td className="">
            <a className="w-max flex flex-col" href={`/product/${wishlistProduct?.id}`}>
                <h4 className="font-playfair-display font-bold text-xl uppercase">{wishlistProduct?.product_name}</h4>
                <p className="uppercase font-light">
                    {wishlistProduct?.description}
                </p>
            </a>
        </td>
        <td>
            <span className="text-center">
                <p className="font-light text-sm">{
                    Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(wishlistProduct?.price ?? 0)
                }</p>
            </span>
        </td>
        <td className="col-span-3">
            <div className="flex flex-col items-center justify-center gap-2">
                {/* <Button className="w-[50%] uppercase bg-bg-secondary text-[#333] hover:bg-secondary hover:text-white gap-2" onClick={callbackFn}><Cross2Icon /> Delete</Button>
                <Button className="w-[50%] uppercase" onClick={addToCart}> Add to shopping bag</Button> */}
                <Button
                    action={callbackFn}
                    style="flex justify-center items-center w-full px-10 py-3 space-x-1 text-sm md:text-base bg-bg-secondary rounded-none hover:bg-text-secondary/60 cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
                    text="Delete"
                    icon={<Close />}
                />
                <Button
                    action={addToCart}
                    style="flex justify-center items-center w-full px-10 py-3 space-x-1 text-sm md:text-base text-white bg-primary rounded-none hover:bg-secondary cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-default"
                    text="Add to cart"
                    icon={<ShoppingCart fillColor="#fff" width={25} height={25} />}
                />
            </div>
        </td>
    </tr>
}
