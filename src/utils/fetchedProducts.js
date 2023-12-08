// products.js
import { fetchProducts } from "./Database";

// Fetch and export the product data
export let ProductItem = [];

fetchProducts().then((data) => {
  ProductItem = data;
});
