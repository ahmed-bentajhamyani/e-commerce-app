import ScrollToTop from "./utils/ScrollTop";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage"
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const ProtectedRoute = () => {
    const location = useLocation();

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
      return (
        <main className="flex justify-center items-center h-screen">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...</span >
          </div>
        </main>)
    }

    return !user ? (
      <Outlet />
    ) : (
      <Navigate to="/" state={{ from: location }} />
    );
  }
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/search/:key" element={<SearchPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
