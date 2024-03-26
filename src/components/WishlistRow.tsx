import { Product } from "@/types/Product";
import { Button } from "./shadcn/ui/button";
import { useCart } from "@/context/CartContext";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import ProductService from "@/services/ProductService";


interface WishlistRowProps {
    wishlistProductId: Product['id']
    callbackFn: () => void;
}

export default function WishlistRow({ wishlistProductId, callbackFn }: WishlistRowProps) {
    const { increaseCartQuantity, getItemQuantity } = useCart()
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        if (wishlistProductId)
            ProductService.getProduct(wishlistProductId).then((res) => setProduct(res))
    }, [wishlistProductId])

    const addToCart = () => {
        if (!product?.id) return
        if (getItemQuantity(product?.id) > 0) return;
        increaseCartQuantity(product?.id)
    }
    return <tr className="flex flex-col items-center md:table-row md:grid-cols-none border-b-2 py-4">
        <td className="py-2">
            <a className="w-max flex" href={`/product/${product?.id}`}>
                <img className="h-36" src={product?.image} alt={product?.description.toUpperCase()} />
            </a>
        </td>
        <td className="">
            <a className="w-max flex flex-col" href={`/product/${product?.id}`}>
                <h4 className="font-playfair-display font-bold text-xl uppercase">{product?.product_name}</h4>
                <p className="uppercase font-light">
                    {product?.description}
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
                    }).format(product?.price ?? 0)
                }</p>
            </span>
        </td>
        <td className="col-span-3">
            <div className="flex flex-col items-center justify-center gap-2">
                <Button className="w-fit md:w-[50%] uppercase bg-bg-secondary text-[#333] hover:bg-secondary hover:text-white gap-2" onClick={callbackFn}><Cross2Icon /> Delete</Button>
                <Button className="w-fit lg:w-[50%] uppercase" onClick={addToCart}> Add to shopping bag</Button>
            </div>
        </td>
    </tr>
}
