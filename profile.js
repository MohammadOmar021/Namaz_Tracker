import { db, doc, getDoc, updateDoc } from "./firebase.js";

const getData = async()=>{
   
   const name = document.getElementById("name"); 
const email = document.getElementById("email"); 
const phone = document.getElementById("phone");
const pImage = document.getElementById("pImage") 
   const refId = localStorage.getItem('docref')
const docRef = doc(db, "users", refId);
const docSnap = await getDoc(docRef);
const data = docSnap.data();

name.value = data.Name;
email.value=data.email
phone.value=data.phoneNumber
pImage.src=data.profilePic



}


getData()
const todayDate3 = document.getElementById("todayDate3")
todayDate3.innerHTML = new Date().toLocaleString()
const todayDate4 = document.getElementById("todayDate4")
todayDate4.innerHTML = new Date().toLocaleString()




const uploadInput = document.getElementById("uploadPhoto");
const updateChanges = document.getElementById("updateChanges");
const pImage = document.getElementById("pImage");
const docId = localStorage.getItem('docref');

updateChanges.addEventListener('click', async () => {
  const file = uploadInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "myNamaz");

  try {
    // Upload to Cloudinary
    const res = await fetch("https://api.cloudinary.com/v1_1/dv42vkv1y/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.error) {
      console.error("Cloudinary Error:", data.error.message);
      alert("Upload failed: " + data.error.message);
      return;
    }

    const imageURL = data.secure_url;
    console.log("Image uploaded:", imageURL);
    pImage.src = imageURL;

    // Save to Firestore
    const washingtonRef = doc(db, "users", docId);
    await updateDoc(washingtonRef, {
      profilePic: imageURL,
    });

    alert("Profile photo updated successfully!");
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong!");
  }
});
