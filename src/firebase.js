import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import  'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAUQYpoCnVQ1RN2iiRg5ddrYq7dS_-0wao",
    authDomain: "disney-clone-10417.firebaseapp.com",
    projectId: "disney-clone-10417",
    storageBucket: "disney-clone-10417.appspot.com",
    messagingSenderId: "913953459322",
    appId: "1:913953459322:web:3186960c4d66a102a53fc3",
    measurementId: "G-E5KE5STQ96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;