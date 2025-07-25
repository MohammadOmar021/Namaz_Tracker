import {doc, getDoc, db, getDocs, collection, query, where } from "./firebase.js"


const todayDate5 = document.getElementById("todayDate5")
todayDate5.innerHTML = new Date().toLocaleDateString()
const todayDate6 = document.getElementById("todayDate6")
todayDate6.innerHTML = new Date().toLocaleTimeString()
const historyDiv = document.getElementById("historyDiv")
const historyDay1 = document.getElementById("historyDay1")
// historyDay1.innerHTML=new Date().toLocaleDateString()
const todayDatec = new Date().toLocaleDateString()
const userId = localStorage.getItem('userId')
console.log(userId)
const q = query(collection(db, "NamazRecord"), where("date", "==", todayDatec), where("userId", "==", userId));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  historyDiv.innerHTML=`   <div class="col-span-7 lg:col-span-1 shadow-xl flex grid grid-cols-3" >
                  <div class="col-span-2  flex flex-col justify-evenly items-center">
                    <span class="ml-2" >${doc.data().date}</span>
                    <span class="ml-2">Fajr</span>
                    <span class="ml-2">Duhr</span>
                    <span class="ml-2">Asr</span>
                    <span class="ml-2">Maghrib</span>
                    <span class="ml-2">Isha</span>
                    
                  </div>
                  
                  <div class="col-span-1  flex flex-col justify-evenly">
                     <div class="flex  md:mt-20 mt-10">
                      <input type="radio" name="fajrStatus" id="fajrCompleted" class="mx-1">
                     <input type="radio" name="fajrStatus" id="fajrMissed" class="mx-1">
                     <input type="radio" name="fajrStatus" id="fajrQaza" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="duhrStatus" id="duhrCompleted" class="mx-1">
                     <input type="radio" name="duhrStatus" id="duhrMissed" class="mx-1">
                     <input type="radio" name="duhrStatus" id="duhrQaza" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="asrStatus" id="asrCompleted"  class="mx-1">
                     <input type="radio" name="asrStatus" id="asrMissed" class="mx-1">
                     <input type="radio" name="asrStatus" id="asrQaza" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="maghribStatus" id="maghribCompleted" class="mx-1">
                     <input type="radio" name="maghribStatus" id="maghribMissed" class="mx-1">
                     <input type="radio" name="maghribStatus" id="maghribQaza" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="ishaStatus" id="ishaCompleted" class="mx-1">
                     <input type="radio" name="ishaStatus" id="ishaMissed" class="mx-1">
                     <input type="radio" name="ishaStatus" id="ishaQaza" class="mx-1">
                     </div>
                     
                  </div>
                      
              </div>`

              console.log(doc.data())

              


const getNamazData = ()=>{

    if(doc.data().fajr=="Completed"){
const fajrCompleted = document.getElementById("fajrCompleted")
fajrCompleted.checked=true
}else if(doc.data().fajr=="Missed"){
    const fajrMissed = document.getElementById("fajrMissed")
fajrMissed.checked=true
}else if(doc.data().fajr=="Qaza"){
    const fajrQaza = document.getElementById("fajrQaza")
fajrQaza.checked=true
}

   
    if(doc.data().Duhr=="Completed"){
const duhrCompleted = document.getElementById("duhrCompleted")
duhrCompleted.checked=true
}else if(doc.data().Duhr=="Missed"){
    const duhrMissed = document.getElementById("duhrMissed")
duhrMissed.checked=true
}else if(doc.data().Duhr=="Qaza"){
    const duhrQaza = document.getElementById("duhrQaza")
duhrQaza.checked=true
}

    if(doc.data().Asr=="Completed"){
const asrCompleted = document.getElementById("asrCompleted")
asrCompleted.checked=true
}else if(doc.data().Asr=="Missed"){
    const asrMissed = document.getElementById("asrMissed")
asrMissed.checked=true
}else if(doc.data().Asr=="Qaza"){
    const asrQaza = document.getElementById("asrQaza")
asrQaza.checked=true
}

    if(doc.data().Maghrib=="Completed"){
const maghribCompleted = document.getElementById("maghribCompleted")
maghribCompleted.checked=true
}else if(doc.data().Maghrib=="Missed"){
    const maghribMissed = document.getElementById("maghribMissed")
maghribMissed.checked=true
}else if(doc.data().Maghrib=="Qaza"){
    const maghribQaza = document.getElementById("maghribQaza")
maghribQaza.checked=true
}

 if(doc.data().Isha=="Completed"){
const ishaCompleted = document.getElementById("ishaCompleted")
ishaCompleted.checked=true
}else if(doc.data().Isha=="Missed"){
    const ishaMissed = document.getElementById("ishaMissed")
ishaMissed.checked=true
}else if(doc.data().Isha=="Qaza"){
    const ishaQaza = document.getElementById("ishaQaza")
ishaQaza.checked=true
}



}

getNamazData();
});





 

// const arr = [];

