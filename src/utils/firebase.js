// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHHM-XmrMz_HruGjIuH3JAk17OUj5rC80",
  authDomain: "netflixgpt-e19be.firebaseapp.com",
  projectId: "netflixgpt-e19be",
  storageBucket: "netflixgpt-e19be.appspot.com",
  messagingSenderId: "679883716105",
  appId: "1:679883716105:web:caa0bf44e9adcfb742ead8",
  measurementId: "G-H70BVDT8BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
export const auth = getAuth();