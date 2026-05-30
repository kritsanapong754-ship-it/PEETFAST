import { db }
from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const saveLevel =
document.getElementById(
"saveLevel"
);

saveLevel?.addEventListener(
"click",
async()=>{

const name =
document.getElementById(
"levelName"
).value;

const difficulty =
document.getElementById(
"levelDifficulty"
).value;

const reward =
Number(
document.getElementById(
"levelReward"
).value
);

await addDoc(
collection(
db,
"levels"
),
{
name,
difficulty,
reward,
createdAt:
Date.now()
}
);

alert(
"เพิ่มด่านสำเร็จ"
);

});
