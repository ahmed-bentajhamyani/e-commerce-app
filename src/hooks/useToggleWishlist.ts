import { useState } from "react";

function isWishedFunction(id: number) {
    const values = localStorage.getItem("wishlistProducts");
    const parsedValues = values ? (JSON.parse(values) as number[]) : [];
    if (parsedValues.includes(id)) return true;
    else return false;
}

function useToggleWishlist(key: string, id: number) {
    const [isWished, setIsWished] = useState(
        () => isWishedFunction(id)
    );

    const toggleWishlist = () => {
        const values = localStorage.getItem(key);
        const wishlistProducts = values ? (JSON.parse(values) as number[]) : [];

        if (wishlistProducts.includes(id)) {
            localStorage.setItem(key, JSON.stringify(wishlistProducts.filter((item) => item !== id)));
            setIsWished(false);
        } else {
            localStorage.setItem(key, JSON.stringify([...wishlistProducts, id]));
            setIsWished(true);
        }
    }

    return { isWished, toggleWishlist }
}

export default useToggleWishlist;