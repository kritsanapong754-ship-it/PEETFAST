import { db }
from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const saveBtn =
document.getElementById(
"saveCharacter"
);

saveBtn?.addEventListener(
"click",
async()=>{

const name =
document.getElementById(
"charName"
).value;

const tier =
document.getElementById(
"charTier"
).value;

const rate =
Number(
document.getElementById(
"charRate"
).value
);

const imageUrl =
document.getElementById(
"charImage"
).value;

const description =
document.getElementById(
"charDesc"
).value;

const hidden =
document.getElementById(
"charSecret"
).checked;

await addDoc(
collection(
db,
"characters"
),
{
name,
tier,
dropRate:rate,
imageUrl,
description,
hidden,
createdAt:
Date.now()
}
);

alert(
"เพิ่มตัวละครสำเร็จ"
);

});
