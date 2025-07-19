import axios from "axios";

const productAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});

productAxios.interceptors.request.use(
  async function (config) {
    // const token = document.cookie;
    // const session = await getSession();
    // if (session && session.accessToken) {
    //   config.headers.Authorization = `Bearer ${session.accessToken}`;
    // }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default productAxios;
