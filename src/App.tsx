import ScrollToTop from "./utils/ScrollTop";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
// import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
          <Route path="/products/:id" element={<ProductPage />} />
          {/* <Route path="/wishlist" element={<WishlistPage />} /> */}

          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
