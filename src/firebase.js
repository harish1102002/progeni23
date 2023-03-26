// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdp41vYFPnnC2sLFLb91NVXvCQRnO34nc",
  authDomain: "progeni-c66a2.firebaseapp.com",
  projectId: "progeni-c66a2",
  storageBucket: "progeni-c66a2.appspot.com",
  messagingSenderId: "185475932142",
  appId: "1:185475932142:web:c25236ae03e66d3a20f8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app,db};