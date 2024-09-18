// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhhG9B1OilB6sWri-YO-TSDf_K5nOMLAU",
  authDomain: "refreeg-platform.firebaseapp.com",
  projectId: "refreeg-platform",
  storageBucket: "refreeg-platform.appspot.com",
  messagingSenderId: "577446198718",
  appId: "1:577446198718:web:b5449a7d4f60467e894def",
  measurementId: "G-H60QNGPDF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, };
