import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getFirestore } from "firebase/firestore"
import 'firebase/auth'
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// // Import the functions you need from the SDKs you need
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase.initializeApp({
//   apiKey: "AIzaSyBI3cuy3inWyUZymgH6heR6ZHv8J3-rNmM",
//   authDomain: "test-940aa.firebaseapp.com",
//   projectId: "test-940aa",
//   storageBucket: "test-940aa.firebasestorage.app",
//   messagingSenderId: "219094058194",
//   appId: "1:219094058194:web:d23b8ce279e9238de2d90b",
//   measurementId: "G-J7DMJX9787"
// });npm install -g firebase-tools 

const firebaseConfig = {
  apiKey: "AIzaSyAtliDJ8nnoNcL1VTAhfVMz0nt3cLSm1p8",
  authDomain: "chat-68b8a.firebaseapp.com",
  projectId: "chat-68b8a",
  storageBucket: "chat-68b8a.firebasestorage.app",
  messagingSenderId: "293843709235",
  appId: "1:293843709235:web:d5e0dde2596e9124996246",
  measurementId: "G-JTN5BBQ3VF"
};

export const ContextFire = createContext(null)

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

 

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFire.Provider value={{appFirebase, auth, db }}>
      <App />
  </ContextFire.Provider>
  
);
