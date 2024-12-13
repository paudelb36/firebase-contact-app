// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOj_luIYldg-lhUOpb5mzx4FClA1o2AEk",
  authDomain: "vite-contact-5d8ee.firebaseapp.com",
  projectId: "vite-contact-5d8ee",
  storageBucket: "vite-contact-5d8ee.firebasestorage.app",
  messagingSenderId: "274143643850",
  appId: "1:274143643850:web:2cdb0ead2fba65904c0c33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);