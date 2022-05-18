// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1NJvWQcEdl45bYfmX2YTNy3gtHPMfass",
  authDomain: "reactfirebaseapp-50f86.firebaseapp.com",
  projectId: "reactfirebaseapp-50f86",
  storageBucket: "reactfirebaseapp-50f86.appspot.com",
  messagingSenderId: "423762003854",
  appId: "1:423762003854:web:2d7046155f21558e8ec6df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
