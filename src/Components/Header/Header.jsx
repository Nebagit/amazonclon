import React, { useContext } from "react";
import LowerHeader from "../LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
const [{user,basket}] =useContext(DataContext)
console.log(user)
const totalItem = basket?.reduce((amount,item)=> {
  return item.amount + amount
},0)
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        {/* logo */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              {/* icon */}
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={38} />
        </div>

        {/* right side link */}
        <div className={classes.order_container}>
          <Link to="/" className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                <p>Hello {user?.email?.split('@')[0]}</p>
                <span className={classes.spanwt} onClick={()=>auth.signOut()}>Sign Out</span>
                </>
              ): (
                <>
                <p>Hello,Sign In</p><span className={classes.spanwt}>Account & Lists</span>
                </>
              )}
            </div>

            
          </Link>

          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span className={classes.spanwt}>& Orders</span>
          </Link>

          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;