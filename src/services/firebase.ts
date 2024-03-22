// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG_B-Xe_M9yhrBFgwks3Z-dslfrRhaUQA",
    authDomain: "e-commerce-5d2cc.firebaseapp.com",
    projectId: "e-commerce-5d2cc",
    storageBucket: "e-commerce-5d2cc.appspot.com",
    messagingSenderId: "19497903451",
    appId: "1:19497903451:web:d30af4e2317d1fa7ee667e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);