import React from 'react'
import Layout from "../../Layout/Layout"
import Carousole from "../../../Components/Carousel/Carousel"
import Catagory from "../../../Components/Catagory/Catagory"
import Product from "../../../Components/Product/Product"
function Landing() {
  return (
		<Layout>
			<Carousole />
			<Catagory />
			<Product />
		</Layout>
	);
}

export default Landing