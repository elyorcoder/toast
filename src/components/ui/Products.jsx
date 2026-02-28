import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import "../../App.css";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProduct(data?.data);
    });
  }, []);
  console.log(products);

  return (
    <div>
      <Table products={products} />
    </div>
  );
};

export default Products;
