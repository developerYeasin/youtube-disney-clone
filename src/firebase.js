import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmLeBaU4eFON3GnF9P754lOfgJByefoUc",
  authDomain: "disney-clone-yeasin.firebaseapp.com",
  projectId: "disney-clone-yeasin",
  storageBucket: "disney-clone-yeasin.appspot.com",
  messagingSenderId: "602918050552",
  appId: "1:602918050552:web:8aa5114aef9b51adf1b90d",
};

// // npm install -g firebase-tools

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, provider, signOut, collection, getDocs };

export default db;
