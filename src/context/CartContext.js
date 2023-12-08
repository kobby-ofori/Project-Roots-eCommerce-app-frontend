/*
// NEW NEW

import React, { useState } from "react";
import { createContext } from "react";
import { ProductItem } from "../utils/fetchedProducts";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < ProductItem.length; i++) {
    const item = ProductItem[i];
    cart[(item._id).toString()] = 0; // Convert the _id to a string and Use "_id" as the key
    //cart[item._id] = 0;
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //
  console.log(cartItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductItem.find((product) => product._id === item); // Use "item" directly as it's the ID

        // Parse the price to a number
        const itemPrice = parseFloat(itemInfo.price.replace(/[^0-9.]/g, ''));

        //const itemPrice = parseFloat(itemInfo.price);
        totalAmount += cartItems[item] * itemPrice;

        //totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2); // Ensure two decimal places for currency
  };

  
  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };
  
  const addToCart = (itemId) => {
    const itemIdAsString = itemId.toString(); // Convert to a string
    setCartItems((prev) => ({ ...prev, [itemIdAsString]: prev[itemIdAsString] + 1 }));
  };
  

  /*
 //new addToCart below
 const addToCart = (itemId) => {
  // Check if the itemId is a valid key in cartItems
  if (cartItems.hasOwnProperty(itemId)) {
    setCartItems((prev) => {
      // Create a copy of the previous state
      const updatedCart = { ...prev };
      
      // Increment the quantity for the specified item
      updatedCart[itemId] = updatedCart[itemId] + 1;
      
      return updatedCart; // Return the updated state
    });
  } else {
    console.log(`Invalid itemId: ${itemId}`);
  }
};
*/

  /*

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

*/




import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { fetchProducts } from "../utils/Database"; // Assuming you have a function to fetch products

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
    fetchProducts() // Replace with your actual fetching function
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
