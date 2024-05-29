// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";



// Your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCirZBEXPMqta2dh5URQYhQj0u4ItEru6A",
  authDomain: "my-portofolio-4e7ba.firebaseapp.com",
  projectId: "my-portofolio-4e7ba",
  storageBucket: "my-portofolio-4e7ba.appspot.com",
  messagingSenderId: "941041617788",
  appId: "1:941041617788:web:62e5a69f4b74390960f2f9",
  measurementId: "G-R7DLW3VH1J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = getStorage(app);

export {
  app,
  db,
  storage
};