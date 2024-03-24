import { createContext, useContext, useEffect, useState } from "react"

export interface WishlistItem {
    companyName: string,
    name: string;
    price: number;
    size?: string;
    image?: string;
}

interface WishlistContextType {
    wishlistItemList: WishlistItem[]
    addWishlistItem: (wishlistItem: WishlistItem) => void
    removeWishlistItem: (index: number) => void
    clearWishlistItemList: () => void
    wishlistItemsAmount: number
}

const WishlistContext = createContext<WishlistContextType>({
    wishlistItemList: [],
    addWishlistItem: () => { },
    removeWishlistItem: () => { },
    clearWishlistItemList: () => { },
    wishlistItemsAmount: 0
})

export function useWishlistContext() {
    return useContext(WishlistContext)
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlistItemList, setwishlistItemList] = useState<WishlistItem[]>(
        JSON.parse(localStorage.getItem("wishlistItemList")!) || []
    )

    const wishlistItemsAmount = wishlistItemList.length;

    const addWishlistItem = (WishlistItem: WishlistItem) => {
        setwishlistItemList([...wishlistItemList, WishlistItem])
    }
    const removeWishlistItem = (index: number) => {
        setwishlistItemList(wishlistItemList.filter((_, i) => i !== index))
    }
    const clearWishlistItemList = () => {
        setwishlistItemList([])
    }

    useEffect(() => {
        localStorage.setItem("wishlistItemList", JSON.stringify(wishlistItemList));
    }, [wishlistItemList]);
    return (
        <WishlistContext.Provider
            value={
                {
                    wishlistItemList: wishlistItemList,
                    addWishlistItem: addWishlistItem,
                    removeWishlistItem: removeWishlistItem,
                    clearWishlistItemList: clearWishlistItemList,
                    wishlistItemsAmount: wishlistItemsAmount,
                }
            }
        >
            {children}
        </WishlistContext.Provider>
    )
}