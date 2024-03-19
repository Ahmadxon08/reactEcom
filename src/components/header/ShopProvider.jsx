/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    }
    return totalPrice;
  };

  const shopValues = {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotalPrice,
  };

  return (
    <ShopContext.Provider value={shopValues}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
