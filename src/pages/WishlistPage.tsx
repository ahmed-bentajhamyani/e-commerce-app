import WishlistRow from "@/components/WishlistRow";
import { useState } from "react";

export interface WishlistData {
    companyName: string,
    name: string;
    price: number;
    size?: string;
    image?: string;
}

export default function WishListPage() {
    const [wishlistDataList, setWishlistDataList] = useState<WishlistData[]>([{ companyName: "Saint Laurent", name: "Borsa Manon Mini", price: 14500, image: "https://images.eleonorabonucci.com/photo/322003/964518/900/1200" },
    { companyName: "Margaret Howell", name: "T-shirt in Maglia", price: 225, size: "S", image: "https://images.eleonorabonucci.com/photo/310347/964801/900/1200" }
    ])

    const deleteWishlistRow = (index: number) => {
        setWishlistDataList(wishlistDataList.filter((_, i) => i !== index))
    }

    return (
        <main className="flex min-h-full flex-col items-center justify-center">
            <section className="w-full flex flex-col items-center p-2 gap-10 md:p-8">
                <h1 className="font-playfair-display text-4xl font-bold">Wishlist</h1>
                <table className="w-full">
                    <thead className="border-b-2">
                        <tr>
                            <th className="basis-[15%]"></th>
                            <th className="basis-1/4"></th>
                            <th className="basis-1/5 font-light text-sm uppercase">Size</th>
                            <th className="basis-1/5 font-light text-sm uppercase">Price</th>
                            <th className="basis-1/5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlistDataList.map((wishlistData, index) =>
                                <WishlistRow key={index} wishlistData={wishlistData} callbackFn={() => deleteWishlistRow(index)} />)
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}
