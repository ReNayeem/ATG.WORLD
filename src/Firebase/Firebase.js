// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD4NP046EavHLyufvFY1l5k-o5jmqLfrkY",

  authDomain: "re-atg-world.firebaseapp.com",

  projectId: "re-atg-world",

  storageBucket: "re-atg-world.appspot.com",

  messagingSenderId: "90206409170",

  appId: "1:90206409170:web:65c0b9ecb615ecd932b80b"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;