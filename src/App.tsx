
import { WishlistProvider } from "./context/WishlistContext"
import { useEffect } from "react"
import WishListPage from "./pages/WishlistPage"

function App() {
  useEffect(() => {
    const wishlistItemList = [
      { companyName: "Saint Laurent", name: "Borsa Manon Mini", price: 14500, image: "https://images.eleonorabonucci.com/photo/322003/964518/900/1200" },
      { companyName: "Margaret Howell", name: "T-shirt in Maglia", price: 225, size: "S", image: "https://images.eleonorabonucci.com/photo/310347/964801/900/1200" }
    ]
    localStorage.setItem("wishlistItemList", JSON.stringify(wishlistItemList))
  }, [])
  return (
    <WishlistProvider>
      <WishListPage />
    </WishlistProvider>
  )
}

export default App
