import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAETrw8967GGcVYAJ9gE04J9ng72fsz0f0",
    authDomain: "unichat-cd093.firebaseapp.com",
    projectId: "unichat-cd093",
    storageBucket: "unichat-cd093.appspot.com",
    messagingSenderId: "210392094184",
    appId: "1:210392094184:web:4bbe8d0b150bdf1425805d"
  }).auth();