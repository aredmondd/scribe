import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    onSnapshot
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh71PG8bDyL3mebohPymeRk3bNNgK58aA",
  authDomain: "scribe-1b0a1.firebaseapp.com",
  projectId: "scribe-1b0a1",
  storageBucket: "scribe-1b0a1.appspot.com",
  messagingSenderId: "903832639587",
  appId: "1:903832639587:web:1045a61d1422ec66f50056"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore()

// Collection ref
const colRef = collection(db, 'tasks')

// List of all tasks
let tasks = []

onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
        tasks.push({...doc.data()})
    })
    console.log(tasks)
})