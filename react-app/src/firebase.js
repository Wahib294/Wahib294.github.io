import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdLGgeLA2v5pWTnJsBZsbHCiS_V7WNFOI",
  authDomain: "chess-6c247.firebaseapp.com",
  projectId: "chess-6c247",
  storageBucket: "chess-6c247.appspot.com",
  messagingSenderId: "708269508540",
  appId: "1:708269508540:web:3e8897264d77337f5ccdb9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// db = Connected to firebase database
