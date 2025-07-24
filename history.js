import {doc, getDoc, db, getDocs, collection, query, where } from "./firebase.js"


const todayDate5 = document.getElementById("todayDate5")
todayDate5.innerHTML = new Date().toUTCString()
const todayDate6 = document.getElementById("todayDate6")
todayDate6.innerHTML = new Date().toUTCString()
const historyDiv = document.getElementById("historyDiv")
const historyDay1 = document.getElementById("historyDay1")
// historyDay1.innerHTML=new Date().toLocaleDateString()
const todayDatec = new Date().toLocaleDateString().split("/").join("")
const userId = localStorage.getItem('userId')
console.log(userId+todayDatec)
const q = query(collection(db, "NamazRecord"), where("userId", "==", userId+todayDatec));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  historyDiv.innerHTML=`   <div class="col-span-7 lg:col-span-1 shadow-xl flex grid grid-cols-3" >
                  <div class="col-span-2  flex flex-col justify-evenly items-center">
                    <span class="ml-2" >${todayDatec}</span>
                    <span class="ml-2">Fajr</span>
                    <span class="ml-2">Duhr</span>
                    <span class="ml-2">Asr</span>
                    <span class="ml-2">Maghrib</span>
                    <span class="ml-2">Isha</span>
                  </div>
                  <div class="col-span-1  flex flex-col justify-evenly">
                     <div class="flex  md:mt-20 mt-10">
                      <input type="checkbox" name="fajrStatus" id="fajrCompleted" class="mx-1">
                     <input type="checkbox" name="fajrStatus" id="fajrMissed" class="mx-1">
                     <input type="checkbox" name="fajrStatus" id="fajrQaza" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     <input type="checkbox" name="" id="" class="mx-1">
                     </div>
                  </div>
                     
              </div>`
});

// const getNamazData = ()=>{

//     if(namazData.fajr=="Completed"){
// const fajrCompleted = document.getElementById("fajrCompleted")
// fajrCompleted.checked=true
// }else if(namazData.fajr=="Missed"){
//     const fajrMissed = document.getElementById("fajrMissed")
// fajrMissed.checked=true
// }else if(namazData.fajr=="Qaza"){
//     const fajrQaza = document.getElementById("fajrQaza")
// fajrMissed.checked=true
// }



// }

// getNamazData();