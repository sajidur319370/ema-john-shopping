import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";
import useProducts from "../../hooks/UseProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => product.id !== pd.id);
    removeFromDb(product.id);

    setCart(rest);
  };
  return (
    <div className="shop-container">
      <div className="order-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
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
