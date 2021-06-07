import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBehPZPlRC8zLLYdF2fXMynWC_2VrIwDuU",
    authDomain: "react-contact-form-7a7d7.firebaseapp.com",
    projectId: "react-contact-form-7a7d7",
    storageBucket: "react-contact-form-7a7d7.appspot.com",
    messagingSenderId: "939520008299",
    appId: "1:939520008299:web:37d776c80c4d0230a9112e"
});

var db = firebaseApp.firestore();

export { db };