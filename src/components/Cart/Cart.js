import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>Order Summery</h2>
      <h4>selected Item: {props.cart.length}</h4>
    </div>
  );
};

export default Cart;
