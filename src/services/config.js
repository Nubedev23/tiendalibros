// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tiendadelibros-cec0a.firebaseapp.com",
  projectId: "tiendadelibros-cec0a",
  storageBucket: "tiendadelibros-cec0a.appspot.com",
  messagingSenderId: "602800185996",
  appId: "1:602800185996:web:5a7b054ed2fcc745e491a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);