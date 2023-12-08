// everything is new

import React from "react";
import { Col, Container } from "react-bootstrap";
import { ProductItem } from "../utils/fetchedProducts";
import CartItems from "./CartItems";

const AddedItems = () => {
  return (
    <Container className="Home-container shop">
      <div className="products">
        {ProductItem.map((product) => (
          <Col key={product._id}>
            <CartItems data={product} />
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default AddedItems;
