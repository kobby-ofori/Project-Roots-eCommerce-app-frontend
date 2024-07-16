import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { ProductItem } from "../utils/fetchedProducts";
import "./Product.css";

const Product = () => {
  const [product, setProductData] = useState([]);
  //search and sort
  const [searchInput, setSearchInput] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  // add to cart funtionalities
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductData(ProductItem);
  }, []);

  // console.log(ProductItem);
  // console.log(product.map((prices) => parseInt(prices.price)));

  const sortedProduct = [...product]; // Copy of product array to prevent mutation

  // Sort products based on the selected criteria
  if (sortCriteria === "price-asc") {
    sortedProduct.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortCriteria === "price-desc") {
    sortedProduct.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  return (
    <Container>
      <Row className="content-row">
        <Row>
          {/* Search Input */}
          <input
            className="search-input"
            type="text"
            placeholder="Search by name or description"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {/* Sort Dropdown */}
          <select
            className="select-input"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </Row>

        {sortedProduct
          .filter(
            (product) =>
              product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          )
          .map((product) => (
            <Col key={product._id} md={3} xs={6}>
              <div className="card-wrapper">
                {/* a wrapper for spacing */}
                <Card className="card custom-card">
                  <Card.Img
                    variant="top"
                    src={`data:image/png;base64,${product.image}`}
                    alt="attire-pics"
                    className="card-img-top img-responsive custom-img"
                    height={"150px"}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="custom-card-body-content">{product.title}</Card.Title>
                    <Card.Text className="custom-card-body-content">by {product.name}</Card.Text>
                    <Card.Text className="custom-card-body-content">{product.description}</Card.Text>
                    <Card.Text className="text-center custom-card-body-content">
                      GHS {product.price}
                    </Card.Text>

                    {/* new button functions */}
                    <Button
                      variant="primary"
                      className="card-btn"
                      onClick={() => addToCart(product._id)}
                    >
                      Add to Cart{" "}
                      {cartItems[product._id] > 0 && (
                        <> ({cartItems[product._id]})</>
                      )}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Product;
