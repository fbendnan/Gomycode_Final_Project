// src/api/productApi.ts
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const getProducts = async (limit?: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    const all = response.data;
    return limit ? all.slice(0, limit) : all;
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw error;
  }
};



// Function to add product (admin)
export const addProduct = async (productData: any, token: string) => {
  const res = await axios.post(BASE_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};