// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGl8h9XagE85k5GcmquGUOhUCl4Agpg6E",
  authDomain: "mini-project-3-2271e.firebaseapp.com",
  projectId: "mini-project-3-2271e",
  storageBucket: "mini-project-3-2271e.firebasestorage.app",
  messagingSenderId: "668030150195",
  appId: "1:668030150195:web:ee996ae3e8ac5efb47a546",
  measurementId: "G-S06GMRVCR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
