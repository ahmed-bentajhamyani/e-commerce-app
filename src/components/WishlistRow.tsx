import { Button } from "@/components/shadcn/ui/button";
import { WishlistData } from "@/pages/WishlistPage";

interface WishlistRowProps {
    wishlistData: WishlistData
    callbackFn: () => void;
}

export default function WishlistRow({ wishlistData, callbackFn }: WishlistRowProps) {
    return <tr className="border-b-2">
        <td className="py-2">
            <a className="w-max flex" href="/en/saint_laurent/women/bags/shoulder-bags/322003">
                <img className="h-36" src={wishlistData.image} alt={wishlistData.name.toUpperCase()} />
            </a>
        </td>
        <td>
            <a className="w-max flex flex-col" href="/en/saint_laurent/women/bags/shoulder-bags/322003">
                <h4 className="font-playfair-display font-bold text-xl uppercase">{wishlistData.companyName}</h4>
                <p className="uppercase font-light">
                    {wishlistData.name}
                </p>
            </a>
        </td>
        <td>
            {
                wishlistData.size &&
                <span className="text-center">
                    <p className="font-light text-sm">{wishlistData.size}</p>
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
                    }).format(wishlistData.price)
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
