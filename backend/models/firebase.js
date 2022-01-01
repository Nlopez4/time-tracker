// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "time-tracker-46a65.firebaseapp.com",
  projectId: "time-tracker-46a65",
  storageBucket: "time-tracker-46a65.appspot.com",
  messagingSenderId: "356060231184",
  appId: "1:356060231184:web:a166e13005e133182ebc95",
  measurementId: "G-ZJ1DGHP6ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);