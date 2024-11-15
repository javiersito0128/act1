import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAkAg5Getf4oc15tuuEOjSyXH1g40q-GRY",
    authDomain: "activity1-cu3.firebaseapp.com",
    projectId: "activity1-cu3",
    storageBucket: "activity1-cu3.firebasestorage.app",
    messagingSenderId: "1003526489525",
    appId: "1:1003526489525:web:23e06100e8997d939605fc"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}