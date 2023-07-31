import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "rafoalfaro-7adc7.firebaseapp.com",
  databaseURL: "https://rafoalfaro-7adc7-default-rtdb.firebaseio.com",
  projectId: "rafoalfaro-7adc7",
  storageBucket: "rafoalfaro-7adc7.appspot.com",
  messagingSenderId: "1000643206438",
  appId: "1:1000643206438:web:bd4b9e2b4d3872c6d8b5e7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
