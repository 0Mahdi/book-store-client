// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyOgPjNXcuqB_0hMY8oRJ7oILH0D8klsU",
  authDomain: "mern-book-inventory-945cc.firebaseapp.com",
  projectId: "mern-book-inventory-945cc",
  storageBucket: "mern-book-inventory-945cc.appspot.com",
  messagingSenderId: "1026550167316",
  appId: "1:1026550167316:web:7764663a34ac159fc5f401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;