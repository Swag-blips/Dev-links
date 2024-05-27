import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG-cvvnHU4o41vOSWxzmg5mdcHDABC0Ws",
  authDomain: "dev-links-b0bcb.firebaseapp.com",
  projectId: "dev-links-b0bcb",
  storageBucket: "dev-links-b0bcb.appspot.com",
  messagingSenderId: "520000246752",
  appId: "1:520000246752:web:0e6b6b101c69938cb69185",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
