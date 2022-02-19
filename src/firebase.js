import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDO0nSy2JqUtlgkg3_9ABumo9U_iPYw8i4",
  authDomain: "metagram-fa46b.firebaseapp.com",
  projectId: "metagram-fa46b",
  storageBucket: "metagram-fa46b.appspot.com",
  messagingSenderId: "39958355630",
  appId: "1:39958355630:web:4a297e31a772b1d6ae173f"
}).auth();