import WishlistRow from "../components/WishlistRow"
import { useWishlistContext } from "../context/WishlistContext"

export default function WishListPage() {
    const { wishlistProducts, removeWishlistProductById } = useWishlistContext()
    return (
        <main className="flex min-h-full flex-col items-center justify-center">
            <section className="w-full flex flex-col items-center p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-4xl font-bold">Wishlist</h1>
                {
                    wishlistProducts.length > 0
                        ?
                        <>
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
                                        wishlistProducts.map((wishlistProduct, index) =>
                                            <WishlistRow key={index} wishlistProduct={wishlistProduct} callbackFn={() => removeWishlistProductById(wishlistProduct.id)} />)
                                    }
                                </tbody>
                            </table>
                        </>
                        :
                        <>
                            <section className="w-full flex justify-center p-24 font-semibold text-secondary bg-[#FBFBFB]">
                                <p>Your wishlist is empty...</p>
                            </section>
                        </>
                }
            </section>
        </main>
    )
}
