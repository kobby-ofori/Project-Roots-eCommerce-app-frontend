
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { fetchProducts } from "../utils/Database"; 

export const CartContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    cart[(item._id).toString()] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]); // State to store fetched products

  console.log(cartItems);

  useEffect(() => {
    // Fetch the products when the component mounts
    fetchProducts() 
      .then((data) => {
        setProducts(data);
        const initialCart = getDefaultCart(data);
        setCartItems(initialCart);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product._id === item);
        if (itemInfo) {
          const itemPrice = parseFloat(itemInfo.price.replace(/[^0-9.]/g, ''));
          totalAmount += cartItems[item] * itemPrice;
        }
      }
    }
    return totalAmount.toFixed(2);
  };

  const addToCart = (itemId) => {
    const itemIdAsString = itemId.toString();
    setCartItems((prev) => ({ ...prev, [itemIdAsString]: prev[itemIdAsString] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
