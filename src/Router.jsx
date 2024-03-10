import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Landing from "./Components/Pages/Landing/Landing";
import Auth from "./Components/Pages/Auth/Auth";
import Payment from "./Components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Orders/Orders";
import Cart from "./Components/Pages/Cart/Cart";
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51OOw6vFHawdQw4M7cOxZy5ELa8zRCDXCoCvhMBO1GtzDHpzOaKh3YLGQMxux9Mf2kFrYOpTY3v17NVq2vxFyxacb005IKNQhkJ"
);


function Routing() {
    return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="auth" element={<Auth />} />
          <Route path="payments" element={
            <ProtectedRoute msg={"you must log in to pay"} redirect={'/payments'} >

              <Elements stripe={stripePromise} >
          <Payment />
          </Elements> </ProtectedRoute>}/>
            
          
          <Route path="orders" element={
            <ProtectedRoute msg={"you must log in to access your orders"}
            redirect={"/orders"} >
              <Orders />
            </ProtectedRoute>          
          } />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          <Route path="cart" element={<Cart />} />
        </Routes>
    </Router>)
}

export default Routing;