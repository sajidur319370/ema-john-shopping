// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EZt4uv-4IMs41sOHU7oStTRLDuvOYAY",
  authDomain: "ema-john-simple-21892.firebaseapp.com",
  projectId: "ema-john-simple-21892",
  storageBucket: "ema-john-simple-21892.appspot.com",
  messagingSenderId: "676150691044",
  appId: "1:676150691044:web:c46e0a326c6f55f400d8f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
