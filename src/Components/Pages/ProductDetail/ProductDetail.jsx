import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      axios
        .get(`${productUrl}/products/${productId}`)
        .then(res => {
          console.log(res);
          setProduct(res.data);
          setTimeout(() => {
            setIsLoading(false); // Set isLoading to false after 1 second
          }, 500);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false); // Set isLoading to false in case of an error
        });
    },
    [productId]
  );

  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard product={product}
      flex = {true}
      renderDesc = {true}
      renderAdd={true} />}

    </Layout>
  );
}

export default ProductDetail;
