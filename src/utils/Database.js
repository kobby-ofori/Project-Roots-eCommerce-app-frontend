import axios from "axios";
import { baseURL } from "./constant"; // Import baseURL

// function to fetch product data
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}`); //fetching data from API
    return response.data; // the response contains an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

