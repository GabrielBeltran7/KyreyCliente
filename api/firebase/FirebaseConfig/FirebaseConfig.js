import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAb3VhWo1Zt4WaERalgdgCao3hlQUqBY8",
  authDomain: "kyrey-d8ee3.firebaseapp.com",
  databaseURL: "https://kyrey-d8ee3-default-rtdb.firebaseio.com",
  projectId: "kyrey-d8ee3",
  storageBucket: "kyrey-d8ee3.appspot.com",
  messagingSenderId: "620686801617",
  appId: "1:620686801617:web:4f2db10ef60dbe99e823f0",
  measurementId: "G-0C89KNV6PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
