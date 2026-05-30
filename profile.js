import { auth, db } from "./firebase.js";

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

export async function loadProfile() {

const user = auth.currentUser;

if(!user) return;

const snap =
await getDoc(
doc(db,"users",user.uid)
);

if(!snap.exists()) return;

const data = snap.data();

alert(`
ชื่อ: ${data.profileName}

หมู: ${data.coins}

ผ่านด่าน: ${data.clears}

ตาย: ${data.deaths}

Role: ${data.role}
`);

}

document
.getElementById("profileBtn")
?.addEventListener(
"click",
loadProfile
);
