import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCEU3Birx1Wl3bZJ5yqI7B-xITkk4QX8DY",
  authDomain: "loginel1p2.firebaseapp.com",
  projectId: "loginel1p2",
  storageBucket: "loginel1p2.appspot.com",
  messagingSenderId: "108922362990",
  appId: "1:108922362990:web:52d718cb2b7da0dcfdda7f",
  measurementId: "G-XQKK9XP4RB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth();
