import {app, db, collection, addDoc, updateDoc, doc, setDoc,getAuth, onAuthStateChanged, auth, signOut, Timestamp, serverTimestamp } from "./firebase.js";
// import userUid from "./signUp.js";

console.log(localStorage.getItem('userId'))
const addNamaz = document.getElementById("addNamaz")
const todayDatec = new Date().toLocaleDateString().split("/").join("")
const userId = localStorage.getItem('userId')
console.log(todayDatec)
console.log(userId+todayDatec)
localStorage.setItem('userExist', userId+todayDatec)


const userExist = ()=>{
  onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
     window.location.replace("index.html")
  } 
});
}

window.onload=userExist();

  addNamaz.addEventListener('click', async ()=>{

    const selectedStatus1 = document.querySelector('input[name="namazStatus-fajr"]:checked').value
    const selectedStatus2 = document.querySelector('input[name="namazStatus-duhr"]:checked').value
    const selectedStatus3 = document.querySelector('input[name="namazStatus-asr"]:checked').value
    const selectedStatus4 = document.querySelector('input[name="namazStatus-maghrib"]:checked').value
    const selectedStatus5 = document.querySelector('input[name="namazStatus-isha"]:checked').value
    const userUid = localStorage.getItem('userId')
 console.log(userUid)
console.log(selectedStatus1)
console.log(selectedStatus2)
console.log(selectedStatus3)
console.log(selectedStatus4)
console.log(selectedStatus5)

const todayDatec = new Date().toLocaleDateString().split("/").join("")
console.log(todayDatec)
const date = new Date().toLocaleDateString()
console.log("Date ye hai",date)
const createdTime = new Date().getTime()
const userId = localStorage.getItem('userId')
await setDoc(doc(db, "NamazRecord", todayDatec), {
  timeCreated: createdTime, 
  userId: userId,
  fajr: selectedStatus1,
  Duhr: selectedStatus2,
  Asr: selectedStatus3,
  Maghrib: selectedStatus4,
  Isha: selectedStatus5
});

 await Swal.fire({
  title: "success",
  text:"Added Successfully",
  icon: "success"

})



})


const todayDate = document.getElementById("todayDate")
const todayDate2 = document.getElementById("todayDate2")

todayDate.innerHTML = new Date().toLocaleDateString()
todayDate2.innerHTML = new Date().toLocaleString()

const signOutBtn= document.getElementById("signOutBtn")

signOutBtn.addEventListener('click', ()=>{
  
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
})
