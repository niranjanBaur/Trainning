import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProduct } from "../redux/actions/productAction";

const ProductListing = () => {
//   const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(products)

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        dispatch(setProduct(res.data))
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

//   console.log(products);

  return (
    <div className="ui grid container" style={{ marginTop: "3rem" }}>
      {/* <h1>Product Listing</h1> */}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
