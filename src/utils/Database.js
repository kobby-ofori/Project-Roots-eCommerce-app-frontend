import axios from "axios";
//import { baseURL } from "./constant"; // Import baseURL

// function to fetch product data
export const fetchProducts = async () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  if (!baseURL) {
    console.error("BASE_URL is not defined in the environment variables");
    return [];
  }

  try {
    const response = await axios.get(baseURL); // fetching data from API
    return response.data; // the response contains an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
