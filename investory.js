import { auth, db } from "./firebase.js";

import {
collection,
query,
where,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function openInventory(){

const user = auth.currentUser;

if(!user) return;

const q = query(
collection(db,"gachaHistory"),
where("uid","==",user.uid)
);

const snap = await getDocs(q);

let text = "ตัวละครที่มี\n\n";

snap.forEach(doc=>{

const data = doc.data();

text += data.characterId + "\n";

});

alert(text);

}
