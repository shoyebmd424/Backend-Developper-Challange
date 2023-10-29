import axios from "axios";

// const Axios = axios.create({ baseURL: "http://localhost:8888/book" });
const Axios = axios.create({
  baseURL: "https://backend-challenge-e5c8.onrender.com/book",
});

export default Axios;
