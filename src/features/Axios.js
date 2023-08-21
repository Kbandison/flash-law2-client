import axios from "axios";

const Axios = axios.create({
  baseURL:
    import.meta.env.VITE_ENDPOINT === "development"
      ? "http://localhost:3001/api"
      : "/api",
  timeout: 5000,
});

export default Axios;
