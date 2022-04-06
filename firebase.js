// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7yfW0SV8AhymlUlNj0GjaLOTIzDH6JpQ",
  authDomain: "instagram-aa1b5.firebaseapp.com",
  projectId: "instagram-aa1b5",
  storageBucket: "instagram-aa1b5.appspot.com",
  messagingSenderId: "875332554161",
  appId: "1:875332554161:web:9305325fd5791280d98190",
  measurementId: "G-P31QJ6W38G"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage=getStorage();

export {app, db, storage};