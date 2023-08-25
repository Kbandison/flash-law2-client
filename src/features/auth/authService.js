import axios from "axios";
import Axios from "../Axios.js";

// const authData = `${import.meta.env.VITE_ENDPOINT}/users`;

const registerUser = async (user) => {
  const response = await Axios.post(`/users/register`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

const loginUser = async (user) => {
  const response = await Axios.post(`/users/login`, user);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

const logoutUser = async () => {
  localStorage.removeItem("user");
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
