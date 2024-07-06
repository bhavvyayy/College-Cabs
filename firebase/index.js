import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_n6HXI9GCa_1HXWXUceaBo6iH_oiceTk",
  authDomain: "cab-sharing-80525.firebaseapp.com",
  projectId: "cab-sharing-80525",
  storageBucket: "cab-sharing-80525.appspot.com",
  messagingSenderId: "408584525654",
  appId: "1:408584525654:web:0aaef1dc8c7d44c8b9e8f7",
  measurementId: "G-LKK8ZWPMW1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
