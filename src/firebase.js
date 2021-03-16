import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCNTs3W-0k3J2cyHEqdn6sUi2T6iIn-rMw",
    authDomain: "ecommerce-a75b0.firebaseapp.com",
    projectId: "ecommerce-a75b0",
    storageBucket: "ecommerce-a75b0.appspot.com",
    messagingSenderId: "1090543046114",
    appId: "1:1090543046114:web:934326d5bf9232054bfdbb"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage= firebase.storage();

  export {auth, storage};
  export default db;