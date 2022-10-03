import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDec3sV98_cbRAUGbrbZlvyQEhgkdutiOs",
  authDomain: "samka-chat.firebaseapp.com",
  projectId: "samka-chat",
  storageBucket: "samka-chat.appspot.com",
  messagingSenderId: "850079140689",
  appId: "1:850079140689:web:5c1a0e8e4869a3a7572170",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();