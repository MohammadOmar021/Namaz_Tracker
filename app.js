import { auth, app, signInWithEmailAndPassword, db, collection, addDoc, updateDoc, doc, onAuthStateChanged } from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
     localStorage.setItem('userId', userCredential.user.uid)
    await Swal.fire({
      title: "Success",
      text: "Login Success",
      icon: "success",
    });
     window.location.replace("dashboard.html")
  } catch (error) {
    console.log(error.message);
  }

  console.log("Ma chl raha hn")
});

