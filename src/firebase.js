// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADM-zDAdPAuveV614r7JKrSWy09-IloD4",
  authDomain: "blog-ta-cedt.firebaseapp.com",
  databaseURL: "https://blog-ta-cedt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-ta-cedt",
  storageBucket: "blog-ta-cedt.appspot.com",
  messagingSenderId: "1041670603710",
  appId: "1:1041670603710:web:32b590ee70b5e46654afef",
  measurementId: "G-HCT3S2SSQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);