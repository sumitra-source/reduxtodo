import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6kCc9efB1-qlPYHs5ToWM-yccvrtULhY",
  authDomain: "crud-5affe.firebaseapp.com",
  databaseURL: "https://crud-5affe-default-rtdb.firebaseio.com",
  projectId: "crud-5affe",
  storageBucket: "crud-5affe.appspot.com",
  messagingSenderId: "136095302884",
  appId: "1:136095302884:web:2260efa858a4c9ac6518f1",
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
