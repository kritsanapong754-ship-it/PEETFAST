import {
auth,
db
}
from "./firebase.js";

import {
doc,
getDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import "./characterManager.js";
import "./levelManager.js";

async function verifyAdmin(){

const user =
auth.currentUser;

if(!user){

location.href =
"index.html";

return;
}

const snap =
await getDoc(
doc(
db,
"users",
user.uid
)
);

if(!snap.exists()){

location.href =
"index.html";

return;
}

const data =
snap.data();

if(data.role!=="admin"){

alert(
"Admin Only"
);

location.href =
"index.html";

}

}

setTimeout(
verifyAdmin,
3000
);
