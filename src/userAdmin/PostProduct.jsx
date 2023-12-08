import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { HiSaveAs } from "react-icons/hi";
import axios from "axios"; // Import Axios
import { postURL } from "../utils/constant"; // Import your API endpoint URL
import ProductsList from "../components/ProductsList";
//import useAuthContext for user
// import {useAuthContext} from "../hooks/useAuthContext"

const PostProduct = () => {
  const [name, setSellerName] = useState(""); // State for the trader name
  const [title, setProductName] = useState(""); // State for the product name
  const [description, setProductDescription] = useState(""); // State for the product description
  const [price, setProductPrice] = useState(""); // State for the product price
  const [productImage, setProductImage] = useState(null); // State for the product image file
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  // new code
  // const {user} = useAuthContext()
  //end of new code

  const handleSubmit = async (e) => {
    e.preventDefault();

    //new code
    // if (!user) {
    //   setErrorMessage('You must be logged in')
    //   return
    // }
    //end of new code

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", productImage);

      // Send a POST request to your server with the form data
      // new code after await axios.post(`${postURL}`and before }, formData
      await axios.post(`${postURL}`, formData);

      // Display a success message
      setSuccessMessage("Product posted successfully!");

      // Optionally, you can reset the form fields
      setSellerName("");
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductImage(null);
    } catch (error) {
      console.error("Error:", error);

      // Display an error message
      setErrorMessage("Failed to post product. Please try again.");
    }
  };

  return (
    <Container>
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage("")}
          dismissible
        >
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
          {errorMessage}
        </Alert>
      )}
      <Row>
      <Col md={6} xs={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(e) => setSellerName(e.target.value)}
              required
            />
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={title}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
            <Form.Label>price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <HiSaveAs />
          </Button>
        </Form>
      </Col>

      <Col md={6} xs={12}>
      <h1>Product List</h1>
        <ProductsList />
      </Col>
      </Row>
    </Container>
  );
};

export default PostProduct;
