import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5ebR19lZzT0y-I1zK6-17W8Yd1KAAGkg",
    authDomain: "adept-depth-308400.firebaseapp.com",
    projectId: "adept-depth-308400",
    storageBucket: "adept-depth-308400.appspot.com",
    messagingSenderId: "349053661609",
    appId: "1:349053661609:web:f0738f3d1473a747b1d4b8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db , auth};