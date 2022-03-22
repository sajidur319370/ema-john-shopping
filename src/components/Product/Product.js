import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const { handleAddToCart, product } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="price">Price: ${price}</p>
        <p className="manufacturer">
          <small>Manufactutrer: {seller}</small>
        </p>
        <p className="rating">
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
        className="button-cart"
      >
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
