// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-sp.firebaseapp.com",
  projectId: "personal-blog-sp",
  storageBucket: "personal-blog-sp.appspot.com",
  messagingSenderId: "545384029809",
  appId: "1:545384029809:web:a6a11595bccad347bb85d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
