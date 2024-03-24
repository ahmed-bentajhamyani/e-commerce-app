import { Button } from "@/components/shadcn/ui/button";
import { WishlistItem } from "@/context/WishlistContext";

interface WishlistRowProps {
    wishlistItem: WishlistItem
    callbackFn: () => void;
}

export default function WishlistRow({ wishlistItem, callbackFn }: WishlistRowProps) {
    return <tr className="border-b-2">
        <td className="py-2">
            <a className="w-max flex" href="/en/saint_laurent/women/bags/shoulder-bags/322003">
                <img className="h-36" src={wishlistItem.image} alt={wishlistItem.name} />
            </a>
        </td>
        <td>
            <a className="w-max flex flex-col" href="/en/saint_laurent/women/bags/shoulder-bags/322003">
                <h4 className="font-playfair-display font-bold text-xl uppercase">{wishlistItem.companyName}</h4>
                <p className="uppercase font-light">
                    {wishlistItem.name}
                </p>
            </a>
        </td>
        <td>
            {
                wishlistItem.size &&
                <span className="text-center">
                    <p className="font-light text-sm">{wishlistItem.size}</p>
                </span>
            }
        </td>
        <td>
            <span className="text-center">
                <p className="font-light text-sm">{
                    Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    }).format(wishlistItem.price)
                }</p>
            </span>
        </td>
        <td>
            <div className="flex flex-col items-center justify-center gap-2">
                <Button className="w-[50%] uppercase bg-bg-secondary text-text-destructive hover:bg-secondary hover:text-foreground" onClick={callbackFn}>Delete</Button>
                <Button className="w-[50%] uppercase">Add to shopping bag</Button>
            </div>
        </td>
    </tr>;
}
