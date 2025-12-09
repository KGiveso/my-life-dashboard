import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// REPLACE THE PLACEHOLDERS BELOW WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export required services
export const auth = getAuth(app);
export const db = getFirestore(app);

