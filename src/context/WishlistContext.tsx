import { Product } from "@/types/Product"
import { createContext, useContext, useEffect, useState } from "react"


interface WishlistContextType {
    wishlistProducts: Product[]
    addWishlistProduct: (WishlistProduct: Product) => void
    removeWishlistProductById: (productId: number) => void
    isProductInWishlist: (productId: number) => boolean
    clearwishlistProducts: () => void
    wishlistProductsAmount: number
}

const WishlistContext = createContext<WishlistContextType>({
    wishlistProducts: [],
    addWishlistProduct: () => { },
    removeWishlistProductById: () => { },
    isProductInWishlist: () => false,
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

    const isProductInWishlist = (productId: number) => {
        return wishlistProducts.some((product) => product.id === productId);
    }

    const addWishlistProduct = (wishlistProduct: Product) => {
        if (wishlistProducts.some((product) => product.id === wishlistProduct.id)) return;
        setwishlistProducts([...wishlistProducts, wishlistProduct])
    }
    const removeWishlistProductById = (productId: number) => {
        setwishlistProducts(wishlistProducts.filter((product) => product.id !== productId))
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
                    removeWishlistProductById: removeWishlistProductById,
                    isProductInWishlist: isProductInWishlist,
                    clearwishlistProducts: clearwishlistProducts,
                    wishlistProductsAmount: wishlistItemsAmount,
                }
            }
        >
            {children}
        </WishlistContext.Provider>
    )
}