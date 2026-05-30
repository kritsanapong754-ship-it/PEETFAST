import { auth }
from "./firebase.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const storage =
getStorage();

export async function uploadAvatar(file){

const user =
auth.currentUser;

if(!user) return null;

const fileRef =
ref(
storage,
`avatars/${user.uid}`
);

await uploadBytes(
fileRef,
file
);

return await getDownloadURL(
fileRef
);

}
