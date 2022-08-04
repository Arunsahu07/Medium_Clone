// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// import dotenv from "dotenv"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbqo0X-CRgf9yb8Zekg8vYd0EUTeLUFko",
  authDomain: "my-medium-7f7aa.firebaseapp.com",
  projectId: "my-medium-7f7aa",
  storageBucket: "my-medium-7f7aa.appspot.com",
  messagingSenderId: "900833332845",
  appId: "1:900833332845:web:2dd4016689e734d6f13964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export {auth,provider, db}