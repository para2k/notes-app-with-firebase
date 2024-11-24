import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:  import.meta.REACT_APP_NOTES_API_KEY,
    authDomain: "react-notes-a47ec.firebaseapp.com",
    projectId: "react-notes-a47ec",
    storageBucket: "react-notes-a47ec.appspot.com",
    messagingSenderId: "917618282215",
    appId: "1:917618282215:web:7cef7f54cc33ba820adc42"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")