// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG-cvvnHU4o41vOSWxzmg5mdcHDABC0Ws",
  authDomain: "dev-links-b0bcb.firebaseapp.com",
  projectId: "dev-links-b0bcb",
  storageBucket: "dev-links-b0bcb.appspot.com",
  messagingSenderId: "520000246752",
  appId: "1:520000246752:web:0e6b6b101c69938cb69185",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
