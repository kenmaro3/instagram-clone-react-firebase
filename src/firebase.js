import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDA1oX9Gt3SFhfJsu1fwmtXZLF_zdgN1U",
  authDomain: "instagram-clone-react-fi-dacea.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-fi-dacea.firebaseio.com",
  projectId: "instagram-clone-react-fi-dacea",
  storageBucket: "instagram-clone-react-fi-dacea.appspot.com",
  messagingSenderId: "266387698753",
  appId: "1:266387698753:web:5ff14089625d956893c2c0",
  measurementId: "G-CPMNPCGVVE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
