import axios from "axios";
import { baseURL } from "./constant"; // Import your baseURL

// Define a function to fetch product data
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}`); //fetching data from API
    return response.data; // Assuming the response contains an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

