import { createContext, useContext, useEffect, useState } from "react";
import Cart from "../components/cart/Cart";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";

interface CartContextType {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  deleteAll: () => void;
  removeFromCart: (id: number) => void;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cartProducts: Product[];
  cartQuantity: number;
}

const CartContext = createContext<CartContextType>({
  getItemQuantity: () => 0,
  increaseCartQuantity: () => { },
  decreaseCartQuantity: () => { },
  deleteAll: () => { },
  removeFromCart: () => { },
  showCart: false,
  setShowCart: () => { },
  cartProducts: [],
  cartQuantity: 0,
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("CartProducts")!) || []
  );

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [showCart]);

  const cartQuantity = cartProducts.reduce(
    (quantity: number, item: CartItem) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartProducts.find((item: CartItem) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartProducts((currItems: CartItem[]) => {
      if (currItems.find((item: CartItem) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartProducts((currItems: CartItem[]) => {
      if (currItems.find((item: CartItem) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: CartItem) => item.id !== id);
      } else {
        return currItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function deleteAll() {
    setCartProducts([]);
  }

  function removeFromCart(id: number) {
    setCartProducts((currItems: CartItem[]) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  useEffect(() => {
    localStorage.setItem("CartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        deleteAll,
        removeFromCart,
        showCart,
        setShowCart,
        cartProducts,
        cartQuantity,
      }}
    >
      {children}
      <Cart />
    </CartContext.Provider>
  );
}
