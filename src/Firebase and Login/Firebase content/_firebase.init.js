// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAlnPJzyEdqKAjX4VXOAl5F5U_iZ28AXI",
  authDomain: "assignemnt-10-8c38a.firebaseapp.com",
  projectId: "assignemnt-10-8c38a",
  storageBucket: "assignemnt-10-8c38a.firebasestorage.app",
  messagingSenderId: "975685725345",
  appId: "1:975685725345:web:a5012eb961a60f65f094e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
