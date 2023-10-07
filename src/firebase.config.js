import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoKtbIIWocEltJfH0DZIHsGRJfRlB3J9M",
  authDomain: "pre-wedding-1.firebaseapp.com",
  projectId: "pre-wedding-1",
  storageBucket: "pre-wedding-1.appspot.com",
  messagingSenderId: "36383256036",
  appId: "1:36383256036:web:d4a56a1f5f10552942abf1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);