import { db, doc, getDoc  } from "./firebase.js";

const getData = async()=>{
   
   const name = document.getElementById("name"); 
const email = document.getElementById("email"); 
const phone = document.getElementById("phone"); 
   const refId = localStorage.getItem('docref')
const docRef = doc(db, "users", refId);
const docSnap = await getDoc(docRef);
const data = docSnap.data();

name.value = data.Name;
email.value=data.email
phone.value=data.phoneNumber




}

getData()
const todayDate3 = document.getElementById("todayDate3")
todayDate3.innerHTML = new Date().toLocaleString()
const todayDate4 = document.getElementById("todayDate4")
todayDate4.innerHTML = new Date().toLocaleString()


