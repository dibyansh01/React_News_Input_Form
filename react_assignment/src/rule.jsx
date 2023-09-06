{
    "rules": {
      ".read": false,
      ".write": false
    }
  }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH6CGKncx96EFDtI3rdMMvctrdcQUXfqY",
  authDomain: "dp-first.firebaseapp.com",
  databaseURL: "https://dp-first-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dp-first",
  storageBucket: "dp-first.appspot.com",
  messagingSenderId: "810842307093",
  appId: "1:810842307093:web:293b75c8a14498ec33ac1c",
  measurementId: "G-NPJ6C2MSZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);