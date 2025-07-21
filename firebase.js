import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBYL-rPNs_xNFonxbUdlVwTGUfeqMKeujI",
    authDomain: "namaztracker-479e5.firebaseapp.com",
    projectId: "namaztracker-479e5",
    storageBucket: "namaztracker-479e5.firebasestorage.app",
    messagingSenderId: "200939104178",
    appId: "1:200939104178:web:4bb61e86e4b718272866ab"
  };

 
  const app = initializeApp(firebaseConfig);

  export{
    app
  }