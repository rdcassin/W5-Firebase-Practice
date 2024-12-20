// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANrnSGlGpli0DrGE-RwN-Eh9qs2T2CNPk",
  authDomain: "fir-practice-ba9fc.firebaseapp.com",
  projectId: "fir-practice-ba9fc",
  storageBucket: "fir-practice-ba9fc.firebasestorage.app",
  messagingSenderId: "768306813836",
  appId: "1:768306813836:web:331948ba7839f3529914a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();