import React, { useState, useContext } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import classes from "./Signup.module.css";
import { auth } from "../../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { DataContext } from "../../../Components/DataProvider/DataProvider";
import { Type } from "../../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = e => {
    e.preventDefault();
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then(userInfo => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch(err => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then(userInfo => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch(err => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG2.png" alt="" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small style={{padding: "5px",
        textAlign: "center",
      color: "red",
    fontWeight: "bold"}}>
      {navStateData?.state?.msg}
    </small>
        )}
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signinButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE CLONE conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerBtn}
        >
          {loading.signUp
            ? <ClipLoader color="#000" size={15} />
            : "Create Your Amazon Account"}
        </button>
        {error &&
          <small style={{ paddingTop: "5px", color: "red" }}>
            {error}
          </small>}
      </div>
    </section>
  );
}

export default Auth;
