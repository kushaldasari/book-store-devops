// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc1UKC9fXxYQPOZWCViE-KIDVoXBop5WE",
  authDomain: "book-store-1-377f8.firebaseapp.com",
  projectId: "book-store-1-377f8",
  storageBucket: "book-store-1-377f8.firebasestorage.app",
  messagingSenderId: "661704230026",
  appId: "1:661704230026:web:742c6764ded82c38df9973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
