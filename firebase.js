import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore,collection, addDoc, updateDoc, doc , setDoc, getDoc, getDocs, query, where   } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBYL-rPNs_xNFonxbUdlVwTGUfeqMKeujI",
    authDomain: "namaztracker-479e5.firebaseapp.com",
    projectId: "namaztracker-479e5",
    storageBucket: "namaztracker-479e5.firebasestorage.app",
    messagingSenderId: "200939104178",
    appId: "1:200939104178:web:4bb61e86e4b718272866ab"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export{
    app,
    auth,
    createUserWithEmailAndPassword,
    db,
    collection, 
    addDoc,
    signInWithEmailAndPassword,
    updateDoc, doc,
    setDoc,
    getDoc,
    onAuthStateChanged,
    getDocs,
    query, where,
    getAuth, 
    signOut 
  }