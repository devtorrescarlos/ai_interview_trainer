import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDHBOqKqVgBiSAEXNaPKEj2HTBo9fpKeEA",
  authDomain: "prepagil.firebaseapp.com",
  projectId: "prepagil",
  storageBucket: "prepagil.firebasestorage.app",
  messagingSenderId: "260954792606",
  appId: "1:260954792606:web:3af59bb2b223d1922e118f",
  measurementId: "G-X3GHJ6TRX9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
