// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg8YyuQcSYJE9T8-4fUMENGwvwBmcAIKM",
  authDomain: "ecommerce-mascotas-73860.firebaseapp.com",
  projectId: "ecommerce-mascotas-73860",
  storageBucket: "ecommerce-mascotas-73860.firebasestorage.app",
  messagingSenderId: "527800269254",
  appId: "1:527800269254:web:a5a135d9706a424a1ddac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;