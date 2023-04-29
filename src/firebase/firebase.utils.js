import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDuPSGbDnlr5bD0lS4o9VXxiM1UJM6drds",
  authDomain: "clothing-db-c7009.firebaseapp.com",
  projectId: "clothing-db-c7009",
  storageBucket: "clothing-db-c7009.appspot.com",
  messagingSenderId: "396338393923",
  appId: "1:396338393923:web:f3232475979a10db5ab5f6",
  measurementId: "G-DLK77PLBG9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
