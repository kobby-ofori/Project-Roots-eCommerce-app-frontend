import React, { useState, useEffect } from "react";
import { Container, Row, Button, Modal, Alert } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../utils/constant";
import ProductMethods from "./ProductMethods";
// new import
// import { useAuthContext } from "../hooks/useAuthContext";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  // new code
  // const {user} = useAuthContext
  // end of new code

  useEffect(() => {
    // Fetch products from your API
    axios
      .get(`${baseURL}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    //new code
    // if (!user) {
    //   return
    // }
    //end of new code

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      // Send a DELETE request to your API to delete the product
      //new code after .delete(`${baseURL}/${productId}` 
      axios
        .delete(`${baseURL}/${productId}`)
        .then((response) => {
          // Remove the deleted product from the state
          setProducts(products.filter((product) => product._id !== productId));
          setSuccessAlert(true);
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorAlert(true);
        });
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleUpdate = (updatedProductData) => {
    // Prepare the data for updating the product
    const formData = new FormData();
    formData.append("name", updatedProductData.name);
    formData.append("image", updatedProductData.image);

    // Send a PUT request to update the product
    axios
      .put(`${baseURL}/${selectedProduct._id}`, formData)
      .then((response) => {
        // Update the product in the state
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === selectedProduct._id
              ? { ...product, ...updatedProductData }
              : product
          )
        );

        setShowModal(false);
        setSuccessAlert(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowModal(false);
        setErrorAlert(true);
      });
  };

  return (
    <Container>
      {/* Displays saved data beneath <h1>Product List</h1> */}
      <Row>
        {products.map((product) => (
          <ProductMethods
            key={product._id}
            product={product}
            onDelete={() => handleDelete(product._id)}
            onEdit={() => handleEdit(product)}
          />
        ))}
      </Row>

      {/* Modal for editing */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* edit form or input fields are here */}
          {selectedProduct && (
            <>
              <input
                type="text"
                defaultValue={selectedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    image: e.target.files[0], // Update the selected image file
                  })
                }
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleUpdate(selectedProduct)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success and Error Alerts */}
      {successAlert && (
        <Alert variant="success" onClose={() => setSuccessAlert(false)} dismissible>
          Product updated/deleted successfully!
        </Alert>
      )}
      {errorAlert && (
        <Alert variant="danger" onClose={() => setErrorAlert(false)} dismissible>
          Error updating/deleting the product.
        </Alert>
      )}
    </Container>
  );
};

export default ProductsList;
