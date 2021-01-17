import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBESjDCCic4qwowLyor-Plxo8yM94sfgUY",
    authDomain: "saraescriu-5eb05.firebaseapp.com",
    projectId: "saraescriu-5eb05",
    storageBucket: "saraescriu-5eb05.appspot.com",
    messagingSenderId: "186438623462",
    appId: "1:186438623462:web:97ce287ec039fbb12b5b27"
});

export function getFireBase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}