
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import {getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDSpVZtvfJshDj5jBrNW5E3TXJzUSWIrto",
  authDomain: "fir-8c025.firebaseapp.com",
  projectId: "fir-8c025",
  storageBucket: "fir-8c025.appspot.com",
  messagingSenderId: "885597069062",
  appId: "1:885597069062:web:6c8ef91235d558c6a5c887",
  measurementId: "G-T8VTZEMLD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database=getFirestore(app)