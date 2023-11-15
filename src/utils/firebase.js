// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCazm2hl_CUA7M1fcU-AbPEHVF101ut23A",
  authDomain: "netflex-gpt-38344.firebaseapp.com",
  projectId: "netflex-gpt-38344",
  storageBucket: "netflex-gpt-38344.appspot.com",
  messagingSenderId: "259108458581",
  appId: "1:259108458581:web:7774fa578e9e919b6a44dc",
  measurementId: "G-1V56GC3JWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
