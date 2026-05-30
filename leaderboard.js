import { db } from "./firebase.js";

import {
collection,
getDocs
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function showLeaderboard(){

const snap =
await getDocs(
collection(db,"users")
);

const players=[];

snap.forEach(doc=>{

players.push(
doc.data()
);

});

players.sort(
(a,b)=>
b.clears-a.clears
);

let text =
"TOP CLEAR\n\n";

players
.slice(0,10)
.forEach((p,i)=>{

text +=
`${i+1}. ${p.profileName}
(${p.clears})\n`;

});

alert(text);

}

document
.getElementById(
"leaderboardBtn"
)
?.addEventListener(
"click",
showLeaderboard
);
