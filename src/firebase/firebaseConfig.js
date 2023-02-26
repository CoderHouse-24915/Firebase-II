import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiszahCgff1tdWNJSuzzsH7XcIXzrsRR8",
  authDomain: "fb-39540.firebaseapp.com",
  projectId: "fb-39540",
  storageBucket: "fb-39540.appspot.com",
  messagingSenderId: "803938081332",
  appId: "1:803938081332:web:854aca8b02d06b63e68861",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
