import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyBI3cuy3inWyUZymgH6heR6ZHv8J3-rNmM",
  authDomain: "test-940aa.firebaseapp.com",
  projectId: "test-940aa",
  storageBucket: "test-940aa.firebasestorage.app",
  messagingSenderId: "219094058194",
  appId: "1:219094058194:web:d23b8ce279e9238de2d90b",
  measurementId: "G-J7DMJX9787"
});

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
