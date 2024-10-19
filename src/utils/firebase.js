// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJM4C6KbMNUwI_keTSznXBkGJAI3uj2ho",
  authDomain: "netflixgpt-99331.firebaseapp.com",
  projectId: "netflixgpt-99331",
  storageBucket: "netflixgpt-99331.appspot.com",
  messagingSenderId: "578176629496",
  appId: "1:578176629496:web:d699482a15cc617d92590d",
  measurementId: "G-XWFCJ7CY4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();