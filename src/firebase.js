// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmRm2N7aNPb6IHFuPGE1CMQE2cv8SHVwM",
  authDomain: "chat-application-24bd3.firebaseapp.com",
  projectId: "chat-application-24bd3",
  storageBucket: "chat-application-24bd3.appspot.com",
  messagingSenderId: "1092345975082",
  appId: "1:1092345975082:web:2a34b5b39ac598dfcfce53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
