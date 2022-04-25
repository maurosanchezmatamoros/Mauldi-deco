import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4wt9MEGMFMqKIA3ipr5uJe8fXnsVN6ks",
  authDomain: "mauldideco.firebaseapp.com",
  projectId: "mauldideco",
  storageBucket: "mauldideco.appspot.com",
  messagingSenderId: "452947723476",
  appId: "1:452947723476:web:78adde1f72f83613016741"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)