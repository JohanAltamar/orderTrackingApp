import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
// export const auth = firebase.auth();
// export const firestore = firebase.firestore;
export { db, firebase };
