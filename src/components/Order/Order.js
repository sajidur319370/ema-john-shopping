import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => product._id !== pd._id);
    removeFromDb(product._id);

    setCart(rest);
  };
  return (
    <div className="shop-container">
      <div className="order-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button
            onClick={() => navigate("/shipment")}
            className="review-button"
          >
            Proceed Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
