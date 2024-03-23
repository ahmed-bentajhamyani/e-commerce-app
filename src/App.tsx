import Navbar from "@/components/Navbar"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import Footer from "@/components/Footer"
import WishListPage from "@/pages/WishlistPage"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-10">
        <LoginPage />
        <RegisterPage />
        <WishListPage />
      </div>
      <Footer />
    </>
  )
}

export default App
