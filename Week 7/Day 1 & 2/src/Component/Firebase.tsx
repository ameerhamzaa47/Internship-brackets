import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAeFp4JWxH97COIbxButIyiTtfzTlbeHQ",
  authDomain: "user-authentication-45f7a.firebaseapp.com",
  projectId: "user-authentication-45f7a",
  storageBucket: "user-authentication-45f7a.firebasestorage.app",
  messagingSenderId: "752660916179",
  appId: "1:752660916179:web:6c7361acaf8da45ac83126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)

export const googleProvider=new GoogleAuthProvider()

export default app;