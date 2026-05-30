import { auth, db } from "./firebase.js";

import {
collection,
getDocs,
doc,
getDoc,
updateDoc,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function weightedRandom(chars){

const total =
chars.reduce(
(sum,c)=>sum+c.dropRate,
0
);

let roll =
Math.random()*total;

for(const c of chars){

if(roll<c.dropRate){

return c;

}

roll-=c.dropRate;

}

return chars[0];

}

export async function rollGacha(){

const user =
auth.currentUser;

if(!user) return;

const userRef =
doc(
db,
"users",
user.uid
);

const userSnap =
await getDoc(userRef);

const userData =
userSnap.data();

if(userData.coins<100){

alert("หมูไม่พอ");

return;

}

const charsRef =
collection(
db,
"characters"
);

const charsSnap =
await getDocs(charsRef);

const chars=[];

charsSnap.forEach(d=>{

chars.push({
id:d.id,
...d.data()
});

});

const reward =
weightedRandom(chars);

await updateDoc(
userRef,
{
coins:userData.coins-100
}
);

await addDoc(
collection(
db,
"gachaHistory"
),
{
uid:user.uid,
characterId:reward.id,
time:Date.now()
}
);

alert(
`คุณได้รับ ${reward.name}`
);

}

document
.getElementById("gachaBtn")
?.addEventListener(
"click",
rollGacha
);
