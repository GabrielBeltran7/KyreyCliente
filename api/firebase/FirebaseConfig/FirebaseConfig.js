import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage  } from 'firebase/storage';

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});   
const db = getFirestore(app);
const  storage = getStorage(app)


export { app, auth, db, storage,  };

