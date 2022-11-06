// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnsOtoCSfwFMVXnTXBuHCpPBwiRHmXy2w",
  authDomain: "chat-app-6a5b2.firebaseapp.com",
  projectId: "chat-app-6a5b2",
  storageBucket: "chat-app-6a5b2.appspot.com",
  messagingSenderId: "451465625350",
  appId: "1:451465625350:web:4e8aa5e742bc922f826887",
  measurementId: "G-TCGB7Y6V4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth,db}
