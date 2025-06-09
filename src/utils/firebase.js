// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLL5FI9oXWyffoalKpE9CTy6ykHCKqu3w",
  authDomain: "netflix-gpt-8a6f4.firebaseapp.com",
  projectId: "netflix-gpt-8a6f4",
  storageBucket: "netflix-gpt-8a6f4.firebasestorage.app",
  messagingSenderId: "325512789906",
  appId: "1:325512789906:web:6a714eb7b770a092d48b4b",
  measurementId: "G-L0ZMY5WNF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();