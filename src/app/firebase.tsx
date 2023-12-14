// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Z2n6vcDCU6cQW1aSe_ncdWhwVN9CsLY",
  authDomain: "my-portfolio-96a43.firebaseapp.com",
  projectId: "my-portfolio-96a43",
  storageBucket: "my-portfolio-96a43.appspot.com",
  messagingSenderId: "918773073676",
  appId: "1:918773073676:web:8c13a5f60b5c53b3e66b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db}