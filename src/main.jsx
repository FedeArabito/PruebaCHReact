import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiy4pLWNDUhp8MaDUiK-8qmjoCBfTiEgg",
  authDomain: "ch-proyectofinalreact.firebaseapp.com",
  projectId: "ch-proyectofinalreact",
  storageBucket: "ch-proyectofinalreact.appspot.com",
  messagingSenderId: "571663997184",
  appId: "1:571663997184:web:36e9390bec7bef2197bbe5"
};



// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
