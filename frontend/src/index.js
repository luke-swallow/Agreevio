import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYCJL4pM2bByEsLyX6Fn01f7HIQysvios",
  authDomain: "agreevio.firebaseapp.com",
  projectId: "agreevio",
  storageBucket: "agreevio.appspot.com",
  messagingSenderId: "481484517853",
  appId: "1:481484517853:web:49a1b70045e35ff7db4634",
  measurementId: "G-QWL0DW64ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore();

ReactDOM.render(
      <App/>,
  document.getElementById('root')
);
