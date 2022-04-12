import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
  };

  return (
    <div style={{ height: "700px" }} className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="phone"
              required
            />
          </div>
          <input type="submit" className="form-submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
