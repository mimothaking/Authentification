// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxJa3AUwJFVt5q7q3uCAMmjHrxGTT58rY",
    authDomain: "authenfiticationreactnative.firebaseapp.com",
    projectId: "authenfiticationreactnative",
    storageBucket: "authenfiticationreactnative.appspot.com",
    messagingSenderId: "249609996316",
    appId: "1:249609996316:web:c897a3f210e022d1f337d9"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0)
    app = firebase.initializeApp(firebaseConfig);
else
    app = firebase.app()

const auth = firebase.auth()

export { auth };