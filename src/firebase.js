import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5cNlsg51oxaXpY4VoTlhp6nHFPywHnIg",
  authDomain: "book-store-users-78c36.firebaseapp.com",
  projectId: "book-store-users-78c36",
  storageBucket: "book-store-users-78c36.appspot.com",
  messagingSenderId: "496547746272",
  appId: "1:496547746272:web:edb5a28ce67ada0df41b85",
  measurementId: "G-MF3V2REJ2V"
};

// Initialize Firebase
//const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);
