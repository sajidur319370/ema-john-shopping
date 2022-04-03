import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart">
      <h2>Order Summery</h2>
      <p>selected Item: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shopping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total charge: ${grandTotal}</h4>
      {props.children}
    </div>
  );
};

export default Cart;
