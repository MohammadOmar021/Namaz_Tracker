import { auth, app, createUserWithEmailAndPassword, db, collection, addDoc} from "./firebase.js";

const signUp = document.getElementById("signUp")

signUp.addEventListener('click', async (e)=>{
      e.preventDefault();
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const fullName = document.getElementById("fullName").value
    const phoneNumber = document.getElementById("phoneNumber").value

    const user ={
        Name: fullName,
        email: email,
        phoneNumber: phoneNumber
    }
      try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(db, 'users'), user)
     await Swal.fire({
  title: "Success",
  text: "Account created Successfully",
  icon: "success"

})
      location.replace("dashboard.html");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
        
})