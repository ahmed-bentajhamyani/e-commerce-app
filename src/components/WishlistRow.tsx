import { Product } from "@/types/Product";
import { Button } from "./shadcn/ui/button";
import { useCart } from "@/context/CartContext";


interface WishlistRowProps {
    wishlistProduct: Product
    callbackFn: () => void;
}

export default function WishlistRow({ wishlistProduct, callbackFn }: WishlistRowProps) {
    const { increaseCartQuantity, getItemQuantity } = useCart()

    const addToCart = () => {
        if (getItemQuantity(wishlistProduct.id) > 0) return;
        increaseCartQuantity(wishlistProduct.id)
    }
    return <tr className="border-b-2">
        <td className="py-2">
            <a className="w-max flex" href={`/product/${wishlistProduct.id}`}>
                <img className="h-36" src={wishlistProduct.image} alt={wishlistProduct.description.toUpperCase()} />
            </a>
        </td>
        <td>
            <a className="w-max flex flex-col" href={`/product/${wishlistProduct.id}`}>
                <h4 className="font-playfair-display font-bold text-xl uppercase">{wishlistProduct.product_name}</h4>
                <p className="uppercase font-light">
                    {wishlistProduct.description}
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
                    }).format(wishlistProduct.price)
                }</p>
            </span>
        </td>
        <td>
            <div className="flex flex-col items-center justify-center gap-2">
                <Button className="w-[50%] uppercase bg-bg-secondary text-[#333] hover:bg-secondary hover:text-white" onClick={callbackFn}>Delete</Button>
                <Button className="w-[50%] uppercase" onClick={addToCart}>Add to shopping bag</Button>
            </div>
        </td>
    </tr>
}
