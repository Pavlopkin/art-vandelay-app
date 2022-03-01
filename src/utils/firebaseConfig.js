// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLFsy9ffFU_BiW4ZDU1_Dv5GBvHepTsI0",
  authDomain: "art-vandelay-data.firebaseapp.com",
  projectId: "art-vandelay-data",
  storageBucket: "art-vandelay-data.appspot.com",
  messagingSenderId: "942491735232",
  appId: "1:942491735232:web:c3785c914a190087124925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


