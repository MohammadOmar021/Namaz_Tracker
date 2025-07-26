import {
  auth,
  app,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
  setDoc,
  doc,
} from "./firebase.js";

const signUp = document.getElementById("signUp");

signUp.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userUid = userCredential.user.uid;
    localStorage.setItem("userId", userUid);
    console.log(userUid);
    const userData = {
      Name: fullName,
      email: email,
      phoneNumber: phoneNumber,
      uid: userUid,
      profilePic:""
    };
    const docRef = await setDoc(doc(db, "users", userUid), userData);
    // localStorage.setItem('docref', docRef.id)
    // console.log(localStorage.getItem('docref'));
    // console.log(docRef)
    await Swal.fire({
      title: "Success",
      text: "Account created Successfully",
      icon: "success",
    });
    location.replace("dashboard.html");
  } catch (error) {
    await Swal.fire({
      title: "error",
      text: error.message,
      icon: "error",
    });
  }
});
