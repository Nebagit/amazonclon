import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Layout from '../../Layout/Layout';
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from '../../Product/ProductCard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../../Utility/action.type';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => amount + item.price * item.amount, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Opps! No Item in your cart</p>
          ) : (
            basket?.map((item) => {
              return (
                <section key={item.id} className={classes.cart_product}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={() => increment(item)}>
                      <IoIosArrowUp size={30} />
                    </button>
                    <span style={{ color: 'black' }}>{item.amount}</span>
                    <button className={classes.btn} onClick={() => decrement(item.id)}>
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type='checkbox' />
              <small>This order contains a gift</small>
            </span>
            <Link to='/payments'>Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;