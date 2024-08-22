import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVBXiN5kitMLd0laGH9CeWZDGYqhc846Y",
  authDomain: "mk-blogging.firebaseapp.com",
  projectId: "mk-blogging",
  storageBucket: "mk-blogging.appspot.com",
  messagingSenderId: "431236333621",
  appId: "1:431236333621:web:1548f96b363c587da8b17c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
