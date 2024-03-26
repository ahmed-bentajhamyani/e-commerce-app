import useToggleWishlist from "@/hooks/useToggleWishlist";
import WishlistRow from "../components/WishlistRow"
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import ProductService from "@/services/ProductService";

export default function WishListPage() {
    const { wishlistProducts, toggleWishlist } = useToggleWishlist("wishlistProducts");
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        console.log(wishlistProducts);
        ProductService.getProducts().then((res) => {
            const fetchedProducts = res.data;
            const filtredProducts = fetchedProducts.filter((product: Product) => wishlistProducts.includes(product.id))
            setProducts(filtredProducts)
        });
    }, [wishlistProducts]);
    
    return (
        <main className="flex min-h-full flex-col items-center justify-center">
            <section className="w-full flex flex-col items-center p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-4xl font-bold">Wishlist</h1>
                {wishlistProducts.length > 0 ?
                    <table className="w-full">
                        <thead className="border-b-2">
                            <tr>
                                <th className="basis-[15%]"></th>
                                <th className="basis-1/4"></th>
                                <th className="basis-1/5 font-light text-sm uppercase">Price</th>
                                <th className="basis-1/5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) =>
                                    <WishlistRow
                                        key={index}
                                        wishlistProduct={product}
                                        callbackFn={() => toggleWishlist(product.id)}
                                    />)
                            }
                        </tbody>
                    </table>
                    :
                    <section className="w-full flex justify-center p-24 font-semibold text-secondary bg-[#FBFBFB]">
                        <p>Your wishlist is empty...</p>
                    </section>
                }
            </section>
        </main>
    )
}
