import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
//to use the firebase database we should have to import this
import "firebase/compat/firestore";
//and also again import authentication tool
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmCX1qYf-jPubkJSYIT_1drNqD4kzezwc",
  authDomain: "clone-b6f8b.firebaseapp.com",
  projectId: "clone-b6f8b",
  storageBucket: "clone-b6f8b.appspot.com",
  messagingSenderId: "729796590305",
  appId: "1:729796590305:web:dbf770cc238ee0ba1a55a0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
