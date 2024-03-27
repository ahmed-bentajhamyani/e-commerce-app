import WishlistRow from "../components/WishlistRow";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import ProductService from "@/services/ProductService";

export default function WishListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const values = localStorage.getItem("wishlistProducts");
        const wishlistProducts = values ? (JSON.parse(values) as number[]) : [];

        ProductService.getProducts().then((res) => {
            const fetchedProducts = res.data;
            const filtredProducts = fetchedProducts.filter((product: Product) => wishlistProducts.includes(product.id))
            setProducts(filtredProducts)
        });
    }, []);

    useEffect(() => {
        setCount(products?.length)
    }, [products]);
    
    return (
        <main className="flex min-h-full flex-col items-center justify-center">
            <section className="w-full flex flex-col items-center p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-4xl font-bold">Wishlist</h1>
                {products.length > 0 && count > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                        {products.map((product, index) =>
                            <WishlistRow
                                key={index}
                                wishlistProduct={product}
                                setCount={setCount}
                            />
                        )}
                    </div>
                    :
                    <section className="w-full flex justify-center p-40 font-semibold text-secondary bg-[#FBFBFB]">
                        <p>Your wishlist is empty...</p>
                    </section>
                }
            </section>
        </main>
    )
}
