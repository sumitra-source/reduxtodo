import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgE_aD6UKvNn073cyWqeFVmt1TQ0r5gvQ",
  authDomain: "reactmuicrudapp-aa6fd.firebaseapp.com",
  projectId: "reactmuicrudapp-aa6fd",
  storageBucket: "reactmuicrudapp-aa6fd.appspot.com",
  messagingSenderId: "1010316203643",
  appId: "1:1010316203643:web:cfa4e4284f56b5aecb34de",
};

// Initialize Firebase

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export { db };
