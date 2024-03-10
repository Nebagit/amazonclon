import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then(res => {
        setResults(res.data);
        console.log(res.data);
        setisLoading(false)
      })
      .catch(err => {
        console.log(err);
        setisLoading(false)
      });
  }, []);

  // console.log(categoryName)
  return (
    <Layout>
       <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category / {categoryName}</p>
        <hr />
        
        {isLoading? (<Loader />) :
        (<div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
            key={product.id}
            product={product} 
            renderDesc={false}
            renderAdd={true}
            />
          ))}
        </div>)}

      </section>
      
    </Layout>
    
  );
}

export default Results;
