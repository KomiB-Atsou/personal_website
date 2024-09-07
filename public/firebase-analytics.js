// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvKkYQEKs_7Vny-i-15729kskw60aPjoA",
  authDomain: "site-komi-b-atsou-429c7.firebaseapp.com",
  projectId: "site-komi-b-atsou-429c7",
  storageBucket: "site-komi-b-atsou-429c7.appspot.com",
  messagingSenderId: "640320528040",
  appId: "1:640320528040:web:a0dc2e03b418ebb75b6c9d",
  measurementId: "G-TEF6MM9F2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);