import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAzKrhvuMnSXWMcpoeXbI9Pw_0ajXn_HmM",
    authDomain: "variety-f1984.firebaseapp.com",
    projectId: "variety-f1984",
    storageBucket: "variety-f1984.appspot.com",
    messagingSenderId: "529300110347",
    appId: "1:529300110347:web:3775472b716dea1fe05b0e"

})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}