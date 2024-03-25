import { Product } from "@/types/Product"
import { createContext, useContext, useEffect, useState } from "react"


interface WishlistContextType {
    wishlistProducts: Product[]
    addWishlistProduct: (WishlistProduct: Product) => void
    removeWishlistProduct: (index: number) => void
    clearwishlistProducts: () => void
    wishlistProductsAmount: number
}

const WishlistContext = createContext<WishlistContextType>({
    wishlistProducts: [],
    addWishlistProduct: () => { },
    removeWishlistProduct: () => { },
    clearwishlistProducts: () => { },
    wishlistProductsAmount: 0
})

export function useWishlistContext() {
    return useContext(WishlistContext)
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlistProducts, setwishlistProducts] = useState<Product[]>(
        JSON.parse(localStorage.getItem("wishlistProducts")!) || []
    )

    const wishlistItemsAmount = wishlistProducts.length;

    const addWishlistProduct = (wishlistProduct: Product) => {
        setwishlistProducts([...wishlistProducts, wishlistProduct])
    }
    const removeWishlistProduct = (index: number) => {
        setwishlistProducts(wishlistProducts.filter((_, i) => i !== index))
    }
    const clearwishlistProducts = () => {
        setwishlistProducts([])
    }

    useEffect(() => {
        localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));
    }, [wishlistProducts]);
    return (
        <WishlistContext.Provider
            value={
                {
                    wishlistProducts: wishlistProducts,
                    addWishlistProduct: addWishlistProduct,
                    removeWishlistProduct: removeWishlistProduct,
                    clearwishlistProducts: clearwishlistProducts,
                    wishlistProductsAmount: wishlistItemsAmount,
                }
            }
        >
            {children}
        </WishlistContext.Provider>
    )
}