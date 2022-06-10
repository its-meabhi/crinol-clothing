import React from "react";

import "./cart-item.style.css";
const CartItem = ({ item }) => {
  const { imageUrl, price, quantity, name } = item;
  return (
    <div className="cart-item">
      <div>
        <img src={imageUrl} alt="CartImage" />
      </div>
      <div>
          <p>{name}</p>
        <span className="price">
          {quantity} X &#36;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
