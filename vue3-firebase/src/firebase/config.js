import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZF7Yr8T0JTZUZDHhnUSfy39XCvLGPVDo",
    authDomain: "vue-3-firebase-4ac7b.firebaseapp.com",
    projectId: "vue-3-firebase-4ac7b",
    storageBucket: "vue-3-firebase-4ac7b.appspot.com",
    messagingSenderId: "881357612085",
    appId: "1:881357612085:web:f6fa21320b4e7ed0c0fd7c"
};

//Init Firebase
firebase.initializeApp(firebaseConfig)

// init Firestore
const db = firebase.firestore();

export { db }