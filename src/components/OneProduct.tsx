import useToggleWishlist from '@/hooks/useToggleWishlist';
import { Product } from '@/types/Product';
import { Button } from './Button';
import { useCart } from '@/context/CartContext';
import ShoppingCart from './icons/ShoppingCart';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

export default function OneProduct({ product }: { product: Product }) {
    const { increaseCartQuantity, setShowCart } = useCart();

    const addToCart = () => {
        if (product?.id) {
            increaseCartQuantity(product?.id);
            setShowCart(true);
        }
    };

    const { isWished, toggleWishlist } = useToggleWishlist("wishlistProducts", product?.id);

    return (
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
                        icon={<ShoppingCart fillColor="#fff" width={30} height={30} />}
                    />
                    <Button
                        action={() => toggleWishlist()}
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
    )
}
