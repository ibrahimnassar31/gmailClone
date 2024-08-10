import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGSfVx91wZGnFfMueCPI23Rnu_S5FTR90",
  authDomain: "clone-51dd3.firebaseapp.com",
  projectId: "clone-51dd3",
  storageBucket: "clone-51dd3.appspot.com",
  messagingSenderId: "2249616903",
  appId: "1:2249616903:web:50d9d3dce372ef464b84a2",
  measurementId: "G-YSDNPPQF9D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();