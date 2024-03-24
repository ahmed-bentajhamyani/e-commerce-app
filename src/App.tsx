import { useEffect } from "react";
import ProductPage from "./pages/ProductPage";

function App() {
  useEffect(() => {
    const cartItem = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
    ];
    localStorage.setItem("CartProducts", JSON.stringify(cartItem));
  }, []);

  return <ProductPage />;
}

export default App;
