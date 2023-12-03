// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ5o3u-tg5uXrxNVgig7isZBXKbfXjY4o",
  authDomain: "project-3-36343.firebaseapp.com",
  projectId: "project-3-36343",
  storageBucket: "project-3-36343.appspot.com",
  messagingSenderId: "456536087306",
  appId: "1:456536087306:web:8e6aad20b78489d4bef8f3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();


export { auth };