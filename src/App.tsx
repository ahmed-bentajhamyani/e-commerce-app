import ScrollToTop from "./utils/ScrollTop";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage"
import { getCurrentUser } from "./services/authService";

function App() {
  const ProtectedRoute = () => {
    if (getCurrentUser()) {
      return <Navigate to={"/"} replace />
    }
    return <Outlet />
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
