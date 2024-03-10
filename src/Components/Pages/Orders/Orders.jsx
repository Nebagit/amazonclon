import React, { useContext, useEffect, useState } from 'react';
import classes from './Orders.module.css';
import Layout from '../../Layout/Layout';
import { DataContext } from '../../DataProvider/DataProvider';
import { db } from '../../../Utility/firebase';
import ProductCard from '../../Product/ProductCard';

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('orders')
        .doc(user.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) =>  (
                    <ProductCard
                      flex={true}
                      product={order}
                      key={order.id}
                    /> )
                  
                    
                  )}
                </div>
              );
            })}
          </div>
          {orders?.length === 0 && (
          <div style={{padding: "20px"}}>you don't have orders yet.</div>)}
        </div>
      </section>
    </Layout>
  );
}

export default Orders;