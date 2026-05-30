import {
auth,
provider,
db
}
from "./firebase.js";

import {
signInWithPopup,
signOut,
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
getDoc,
setDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const loginBtn =
document.getElementById("googleLogin");

const logoutBtn =
document.getElementById("logoutBtn");

loginBtn?.addEventListener("click", async()=>{

const result =
await signInWithPopup(
auth,
provider
);

const user =
result.user;

const profileName =
document.getElementById(
"profileName"
).value;

const ref =
doc(db,"users",user.uid);

const snapshot =
await getDoc(ref);

if(!snapshot.exists()){

await setDoc(ref,{
uid:user.uid,
name:user.displayName,
profileName,
coins:100,
deaths:0,
clears:0,
role:
profileName==="Admin"
?
"admin"
:
"player"
});

}

});

logoutBtn?.addEventListener("click",()=>{
signOut(auth);
});

onAuthStateChanged(auth,(user)=>{

if(user){

document
.getElementById("login-screen")
.classList.add("hidden");

document
.getElementById("main-screen")
.classList.remove("hidden");

}else{

document
.getElementById("login-screen")
.classList.remove("hidden");

document
.getElementById("main-screen")
.classList.add("hidden");

}

});
