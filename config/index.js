// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLBcWZqMdZb3dLQM3X2cyAUR3UNxYSY4M",
  authDomain: "ask-answer-firebase.firebaseapp.com",
  projectId: "ask-answer-firebase",
  storageBucket: "ask-answer-firebase.appspot.com",
  messagingSenderId: "674309310159",
  appId: "1:674309310159:web:8fcd6975d18e17519399ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
  app,
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
