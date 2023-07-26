// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnR4eeq4liKT4Vna40wIx8gawGNEwVpbU",
  authDomain: "coder-entrega-final.firebaseapp.com",
  projectId: "coder-entrega-final",
  storageBucket: "coder-entrega-final.appspot.com",
  messagingSenderId: "3209138676",
  appId: "1:3209138676:web:eabb4985819f2c1915e9a1"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);