// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
//  {REACT_APP_API_KEY,  REACT_APP_PROJECT_ID,REACT_APP_STORAGE_BUCKET, 
//   REACT_APP_AUTH_DOMAIN,REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID} = process.env

  const  REACT_APP_API_KEY = "AIzaSyDbqo0X-CRgf9yb8Zekg8vYd0EUTeLUFko"
  const  REACT_APP_PROJECT_ID = "my-medium-7f7aa"
  const  REACT_APP_STORAGE_BUCKET =  "my-medium-7f7aa.appspot.com"
  const  REACT_APP_AUTH_DOMAIN = "my-medium-7f7aa.firebaseapp.com"
  const  REACT_APP_MESSAGING_SENDER_ID = "900833332845"
  const  REACT_APP_APP_ID = "1:900833332845:web:2dd4016689e734d6f13964"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId:  REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
export {auth,provider, db}
