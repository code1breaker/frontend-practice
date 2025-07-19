import productAxios from "../utils/productAxios";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productAxios.get("/product");
        const data = response.data;
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <p onClick={() => signOut()}>Logout</p>
      {/* {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No product data available.</p>
      )} */}
    </div>
  );
};

export default Product;
