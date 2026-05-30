import {
auth,
db
}
from "./firebase.js";

import {
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
getDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const welcome =
document.getElementById(
"welcomeName"
);

const coinCount =
document.getElementById(
"coinCount"
);

onAuthStateChanged(
auth,
async(user)=>{

if(!user) return;

const ref =
doc(
db,
"users",
user.uid
);

const snap =
await getDoc(ref);

if(!snap.exists()) return;

const data =
snap.data();

welcome.innerText =
`สวัสดี ${data.profileName}`;

coinCount.innerText =
data.coins;

});
