import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { } from 'firebase/storage';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXvuJ2rNlsJfm5U5KizHLdsU1FQUWP3Y4",
  authDomain: "desafio-alest-c9985.firebaseapp.com",
  databaseURL: "https://desafio-alest-c9985.firebaseio.com",
  projectId: "desafio-alest-c9985",
  storageBucket: "desafio-alest-c9985.appspot.com",
  messagingSenderId: "476570097292",
  appId: "1:476570097292:web:83a10a24d690f424068da9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };