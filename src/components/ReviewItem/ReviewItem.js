import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { img, name, price, shipping } = product;
    return (
        <div className="review-container">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="item-detail">
                <h4 title={name}>
                    {name.length > 20 ? name.slice(0, 20) + "..." : name}
                </h4>
                <h6>price:${price}</h6>
                <h5>Shipping Charge:${shipping}</h5>
            </div>
            <button
                onClick={() => {
                    handleRemoveItem(product);
                }}
                className="delete-button"
            >
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;
