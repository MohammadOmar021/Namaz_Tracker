import {doc, getDoc, db, getDocs, collection, query, where, Timestamp } from "./firebase.js"


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
const today = new Date();
const yesterday = new Date();

yesterday.setDate(today.getDate() - 7);


const yesterdayTime = yesterday.getTime()

const todayTime = today.getTime()
console.log(new Date(todayTime).getDate())
console.log(new Date(yesterdayTime).getDate())

//console.log(new Date().getDate(Timestamp.fromDate(new Date())));

const q = query(
  collection(db, "NamazRecord"),
  where("timeCreated", ">", yesterdayTime),
  where("timeCreated", "<", todayTime),
  where("userId", "==", userId)
);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    const data = doc.data();
    const docId =  doc.id;
    console.log(docId)
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  historyDiv.innerHTML+=`   <div class="col-span-7 lg:col-span-1 shadow-xl flex grid grid-cols-3" >
                  <div class="col-span-2  flex flex-col justify-evenly items-center">
                    <span class="ml-2" >${new Date(doc.data().timeCreated).toLocaleDateString()}</span>
                    <span class="ml-2">Fajr</span>
                    <span class="ml-2">Duhr</span>
                    <span class="ml-2">Asr</span>
                    <span class="ml-2">Maghrib</span>
                    <span class="ml-2">Isha</span>
                    
                  </div>
                  
                  <div class="col-span-1  flex flex-col justify-evenly">
                     <div class="flex  md:mt-20 mt-10">
                      <input type="radio" name="fajrStatus-${docId}" id="fajrCompleted-${docId}" class="mx-1">
                     <input type="radio" name="fajrStatus-${docId}" id="fajrMissed-${docId}" class="mx-1">
                     <input type="radio" name="fajrStatus-${docId}" id="fajrQaza-${docId}" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="duhrStatus-${docId}" id="duhrCompleted-${docId}" class="mx-1">
                     <input type="radio" name="duhrStatus-${docId}" id="duhrMissed-${docId}" class="mx-1">
                     <input type="radio" name="duhrStatus-${docId}" id="duhrQaza-${docId}" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="asrStatus-${docId}" id="asrCompleted-${docId}"  class="mx-1">
                     <input type="radio" name="asrStatus-${docId}" id="asrMissed-${docId}" class="mx-1">
                     <input type="radio" name="asrStatus-${docId}" id="asrQaza-${docId}" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="maghribStatus-${docId}" id="maghribCompleted-${docId}" class="mx-1">
                     <input type="radio" name="maghribStatus-${docId}" id="maghribMissed-${docId}" class="mx-1">
                     <input type="radio" name="maghribStatus-${docId}" id="maghribQaza-${docId}" class="mx-1">
                     </div>
                     <div class="flex ">
                      <input type="radio" name="ishaStatus-${docId}" id="ishaCompleted-${docId}" class="mx-1">
                     <input type="radio" name="ishaStatus-${docId}" id="ishaMissed-${docId}" class="mx-1">
                     <input type="radio" name="ishaStatus-${docId}" id="ishaQaza-${docId}" class="mx-1">
                     </div>
                     
                  </div>
                      
              </div>`

              console.log(doc.data())

              


const getNamazData = ()=>{

    if(doc.data().fajr=="Completed"){
const fajrCompleted = document.getElementById(`fajrCompleted-${docId}`)
fajrCompleted.checked=true
}else if(doc.data().fajr=="Missed"){
    const fajrMissed = document.getElementById(`fajrMissed-${docId}`)
fajrMissed.checked=true
}else if(doc.data().fajr=="Qaza"){
    const fajrQaza = document.getElementById(`fajrQaza-${docId}`)
fajrQaza.checked=true
}

   
    if(doc.data().Duhr=="Completed"){
const duhrCompleted = document.getElementById(`duhrCompleted-${docId}`)
duhrCompleted.checked=true
}else if(doc.data().Duhr=="Missed"){
    const duhrMissed = document.getElementById(`duhrMissed-${docId}`)
duhrMissed.checked=true
}else if(doc.data().Duhr=="Qaza"){
    const duhrQaza = document.getElementById(`duhrQaza-${docId}`)
duhrQaza.checked=true
}

    if(doc.data().Asr=="Completed"){
const asrCompleted = document.getElementById(`asrCompleted-${docId}`)
asrCompleted.checked=true
}else if(doc.data().Asr=="Missed"){
    const asrMissed = document.getElementById(`asrMissed-${docId}`)
asrMissed.checked=true
}else if(doc.data().Asr=="Qaza"){
    const asrQaza = document.getElementById(`asrQaza-${docId}`)
asrQaza.checked=true
}

    if(doc.data().Maghrib=="Completed"){
const maghribCompleted = document.getElementById(`maghribCompleted-${docId}`)
maghribCompleted.checked=true
}else if(doc.data().Maghrib=="Missed"){
    const maghribMissed = document.getElementById(`maghribMissed-${docId}`)
maghribMissed.checked=true
}else if(doc.data().Maghrib=="Qaza"){
    const maghribQaza = document.getElementById(`maghribQaza-${docId}`)
maghribQaza.checked=true
}

 if(doc.data().Isha=="Completed"){
const ishaCompleted = document.getElementById(`ishaCompleted-${docId}`)
ishaCompleted.checked=true
}else if(doc.data().Isha=="Missed"){
    const ishaMissed = document.getElementById(`ishaMissed-${docId}`)
ishaMissed.checked=true
}else if(doc.data().Isha=="Qaza"){
    const ishaQaza = document.getElementById(`ishaQaza-${docId}`)
ishaQaza.checked=true
}



}

getNamazData();
});





 

// const arr = [];

