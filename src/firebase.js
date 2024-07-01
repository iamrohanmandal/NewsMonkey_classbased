// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHIUHXPxERJeB0weoouoTpUaDyVZZ4_Xw",
  authDomain: "news-monkey-d6f02.firebaseapp.com",
  projectId: "news-monkey-d6f02",
  storageBucket: "news-monkey-d6f02.appspot.com",
  messagingSenderId: "972997892059",
  appId: "1:972997892059:web:cd53d602ca944ad1a239fe",
  measurementId: "G-ZFW3VT9NS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);