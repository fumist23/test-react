// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA47xi64SeKgqcgnd-1cEU3EeFDNb7x_w8",
  authDomain: "react-test-satofumi.firebaseapp.com",
  projectId: "react-test-satofumi",
  storageBucket: "react-test-satofumi.appspot.com",
  messagingSenderId: "1062633060841",
  appId: "1:1062633060841:web:a9cd05ac70eefb2088f378",
  measurementId: "G-SKSSYJE4Q9",
};

export const getApp = () => {
  const app = initializeApp(firebaseConfig); // Initialize Firebase

  return app;
};
