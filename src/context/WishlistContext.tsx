import { Product } from "@/types/Product"
import { createContext, useContext, useEffect, useState } from "react"


interface WishlistContextType {
    wishlistProductIds: Product['id'][]
    addWishlistProductById: (productId: Product['id']) => void
    removeWishlistProductById: (productId: Product['id']) => void
    isProductInWishlist: (productId: Product['id']) => boolean
    clearwishlistProductIds: () => void
    wishlistProductsAmount: number
}

const WishlistContext = createContext<WishlistContextType>({
    wishlistProductIds: [],
    addWishlistProductById: () => { },
    removeWishlistProductById: () => { },
    isProductInWishlist: () => false,
    clearwishlistProductIds: () => { },
    wishlistProductsAmount: 0
})

export function useWishlistContext() {
    return useContext(WishlistContext)
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlistProductIds, setwishlistProductIds] = useState<Product['id'][]>(
        JSON.parse(localStorage.getItem("wishlistProductIds")!) || []
    )

    const wishlistItemsAmount = wishlistProductIds.length;

    const isProductInWishlist = (productId: Product['id']) => {
        return wishlistProductIds.some((id) => id === productId);
    }

    const addWishlistProductById = (productId: Product['id']) => {
        if (wishlistProductIds.some((id) => id === productId)) return;
        setwishlistProductIds([...wishlistProductIds, productId])
    }
    const removeWishlistProductById = (productId: number) => {
        setwishlistProductIds(wishlistProductIds.filter((id) => id !== productId))
    }
    const clearwishlistProductIds = () => {
        setwishlistProductIds([])
    }

    useEffect(() => {
        localStorage.setItem("wishlistProductIds", JSON.stringify(wishlistProductIds));
    }, [wishlistProductIds]);
    return (
        <WishlistContext.Provider
            value={
                {
                    wishlistProductIds: wishlistProductIds,
                    addWishlistProductById: addWishlistProductById,
                    removeWishlistProductById: removeWishlistProductById,
                    isProductInWishlist: isProductInWishlist,
                    clearwishlistProductIds: clearwishlistProductIds,
                    wishlistProductsAmount: wishlistItemsAmount,
                }
            }
        >
            {children}
        </WishlistContext.Provider>
    )
}