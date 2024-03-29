import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PaystackButton } from "react-paystack";
import "./CheckoutModal.css";
import 'react-phone-number-input/style.css'
// import PhoneInput from "react-phone-number-input"
import PhoneInputWithCountrySelect from "react-phone-number-input";

const CheckoutModal = ({ show, handleShow, handleClose, totalAmount }) => {
  const publicKey = process.env.REACT_APP_PAYSTACK_KEY;
  const amount = totalAmount;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount*100,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "rgb(211, 165, 165)" }}
        >
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "rgb(211, 165, 165)" }}>
          <div className="checkout-form">
            <h5>GHS{amount}</h5>
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <PhoneInputWithCountrySelect
                id="phone"
                value={phone}
                onChange={(value) => setPhone(value)}
              />
              {/* <input
                type="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              /> */}
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(211, 165, 165)" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutModal;
