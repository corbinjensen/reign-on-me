// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA173gptAqFEXzkHQn7urwoxKVzmvlTNxI",
  authDomain: "dragr-5f59e.firebaseapp.com",
  projectId: "dragr-5f59e",
  storageBucket: "dragr-5f59e.appspot.com",
  messagingSenderId: "431261281871",
  appId: "1:431261281871:web:45139d209454cf843a043a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;