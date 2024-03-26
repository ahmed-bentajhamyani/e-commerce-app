import { useState } from "react";

function useToggleWishlist(key: string) {
    const [isWished, setIsWished] = useState(false);

    const values = localStorage.getItem(key);
    const parsedValues = values ? (JSON.parse(values) as number[]) : [];

    const [wishlistProducts, setWishlistProducts] = useState(parsedValues)

    const toggleWishlist = (id: number) => {
        if (wishlistProducts.includes(id)) {
            setWishlistProducts(wishlistProducts.filter((item) => item !== id));
            localStorage.setItem(key, JSON.stringify(wishlistProducts));
            setIsWished(false);
        } else {
            setWishlistProducts([...wishlistProducts, id]);
            localStorage.setItem(key, JSON.stringify(wishlistProducts));
            setIsWished(true);
        }
    }

    return { isWished, toggleWishlist, wishlistProducts }
}

export default useToggleWishlist;