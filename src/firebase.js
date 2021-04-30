import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
   
    apiKey: "AIzaSyCGbWnhtpCf8AFs-Js576nTXIWT8unDEdQ",
    authDomain: "facebook-messenger-clone-36f28.firebaseapp.com",
    projectId: "facebook-messenger-clone-36f28",
    storageBucket: "facebook-messenger-clone-36f28.appspot.com",
    messagingSenderId: "179608708498",
    appId: "1:179608708498:web:3a22277440fb4dc9b94d4b"
});
    

const db=firebaseApp.firestore();
export default db;
