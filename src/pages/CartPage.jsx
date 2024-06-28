import React, { useContext, useState } from "react";
import "./CartPage.css";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";
import { CartContext } from "../context/CartContext";
import { ProductItem } from "../utils/fetchedProducts";
//import AddedItems from "./AddedItems";
//import useAuthContext for user
import { useAuthContext } from "../hooks/useAuthContext";
import CartItems from "./CartItems";

const CartPage = () => {
  //new code
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  // new code
  const { user } = useAuthContext();
  //end of new code

  // define useNavigate as navigate to navigate to the store page when continue shopping button is clicked
  const navigate = useNavigate();

  // button functionalities to add and remove products from cartpage
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();

  // Modal function descriptions
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  // const handleModalShow = () => setShowModal(true);

  //new code
  const handleModalShow = () => {
    if (!user) {
      setErrorMessage("You must be logged in");
      return;
    }

    // Check if the user has read the terms and agreements
    const hasReadTerms = user.hasReadTerms;

    if (!hasReadTerms) {
      // Display a confirmation message with a link to the terms and agreements
      const confirmTerms = window.confirm(
        "By proceeding, you confirm that you have read and agree to our terms and agreements. You can find it at the Info-Section page."
      );

      if (!confirmTerms) {
        return; // User canceled
      }

      // click ok to show checkout modal
      setShowModal(true);
    }

    // If the user is authorized and has read the terms, show the checkout modal
    setShowModal(true);
  };
  //end of new code

  // Filter products with a count greater than 0
  //const selectedProducts = ProductItem.filter((product) => cartItems[product._id] > 0);

  return (
    <Container fluid className="cartpage-container">
      <div className="cart-hero-section">
        <div>
          <h4>Free delivery when you use our website (Accra & Kumasi only)</h4>
        </div>
      </div>
      <div className="advert">
        <p>
          20% off all products. Delivery within 72hours on working days from 7am
          to 8pm GMT
        </p>
      </div>
      <br />
      <h2>Cart</h2>
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
          {errorMessage}
        </Alert>
      )}
      <Row>
        <Col className="seleted-products-col">
          <div>
            <h5>SHOPPING CART</h5>
            <p>Do you have an account? Sign in to continue shopping</p>
            <button className="cart-page-btn" onClick={() => navigate("/login")}>
              Sign in
            </button>
            <br />
          </div>
          <h4>Selected Products:</h4>

          {/* Map over the selected products */}
          {/* {selectedProducts.map((product) => (
            <AddedItems key={product._id} data={product} />
          ))} */}

          {ProductItem.map((product) => {
            if (cartItems[product._id] !== 0) {
              return <CartItems key={product._id} data={product} />;
            }
            return null;
          })}
        </Col>
        <Col className="check-out-col">
          <div>
            <h5>ORDER SUMMARY</h5>
            <input type="text" placeholder="HAVE A PROMO CODE?" />
          </div>
          {/* other... */}
          {totalAmount > 0 ? (
            <div className="cart-checkout" >
              <p>Subtotal: GHS {totalAmount}</p>
              <button onClick={() => navigate("/store")} className="Cart-btn">
                Continue Shopping
              </button>
              <button onClick={handleModalShow} className="checkout-btn">
                Checkout
              </button>
            </div>
          ) : (
            <h4>Cart is Empty</h4>
          )}
        </Col>
      </Row>
      <CheckoutModal
        show={showModal}
        handleShow={handleModalShow}
        handleClose={handleModalClose}
        totalAmount={totalAmount}
      />
    </Container>
  );
};

export default CartPage;
