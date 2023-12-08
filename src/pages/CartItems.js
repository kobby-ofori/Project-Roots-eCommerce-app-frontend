//everything is new

import React, { useContext } from "react";
import { Button } from "react-bootstrap"; 
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const CartItems = (props) => {
  const { _id, title, description, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={`data:image/png;base64,${image}`} alt="" height="150px" />
      <div className="description">
        <p>
          <p>{title}</p>
          <p>{description}</p>
        </p>
        <p>GHS {price}</p>
        <div className="countHandler">
          <Button onClick={() => removeFromCart(_id)} className="CartItem-btn">
            -
          </Button>
          <input
            className="CartItems-input"
            value={cartItems[_id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
          />
          <Button onClick={() => addToCart(_id)} className="CartItem-btn">
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
