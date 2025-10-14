import axiosClient from "./axiosClient";

export const registerUser = async (data: { name: string; email: string; password: string }) => {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axiosClient.post("/auth/login", data);
  return response.data;
};
