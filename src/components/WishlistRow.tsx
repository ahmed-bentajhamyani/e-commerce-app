import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";
import { Button } from "./Button";
import Close from "./icons/Close";
import ShoppingCart from "./icons/ShoppingCart";
import useToggleWishlist from "@/hooks/useToggleWishlist";
import { Link } from "react-router-dom";

export default function WishlistRow({ wishlistProduct, setCount }: { wishlistProduct: Product, setCount: React.Dispatch<React.SetStateAction<number>> }) {
    const { increaseCartQuantity, setShowCart } = useCart();


    const { isWished, toggleWishlist } = useToggleWishlist("wishlistProducts", wishlistProduct.id);

    const addToCart = () => {
        if (wishlistProduct?.id) {
            increaseCartQuantity(wishlistProduct.id);
            setShowCart(true);
        }
    };

    const removeFromWishlist = () => {
        toggleWishlist();
        setCount(prev => prev - 1)
    };

    return (
        <article className={`flex flex-col justify-between items-center p-2 ${!isWished && 'hidden'}`}>
            <Link to={`/product/${wishlistProduct?.id}`}>
                <img className="h-72" src={wishlistProduct?.image} alt={wishlistProduct?.description.toUpperCase()} />
            </Link>
            <div className="mt-2">
                <Link to={`/product/${wishlistProduct?.id}`} className="flex justify-between items-center">
                    <h4 className="font-playfair-display font-bold text-xl uppercase">{wishlistProduct?.product_name}</h4>
                    <p className="font-light text-sm">
                        {Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(wishlistProduct?.price ?? 0)}
                    </p>
                </Link>
                <p className="uppercase font-light">{wishlistProduct?.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button
                        action={removeFromWishlist}
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
            </div>
        </article>
    )
}
