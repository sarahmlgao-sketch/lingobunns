// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP6iPP8PDMZIu9vdL_6QndtgN6uji2auw",
  authDomain: "first-project-55c61.firebaseapp.com",
  projectId: "first-project-55c61",
  storageBucket: "first-project-55c61.firebasestorage.app",
  messagingSenderId: "48911575534",
  appId: "1:48911575534:web:62af65f88f5d55f5e9c6ff",
  measurementId: "G-60FZTVC32P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);