import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

/*
=================================
CHECK LOGIN STATUS
=================================
*/

export function protectPage() {

onAuthStateChanged(auth, (user) => {

if (!user) {

window.location.href =
"login.html";

}

});

}

/*
=================================
LOGOUT FUNCTION
=================================
*/

export async function logout() {

try {

await signOut(auth);

window.location.href =
"login.html";

} catch (error) {

console.error(error);

}

}

/*
=================================
CURRENT USER
=================================
*/

export function getCurrentUser(callback) {

onAuthStateChanged(auth, (user) => {

callback(user);

});

}

/*
=================================
SHOW USER EMAIL
=================================
*/

export function showUserEmail(elementId) {

const element =
document.getElementById(elementId);

if (!element) return;

onAuthStateChanged(auth, (user) => {

if (user) {

element.innerHTML =
user.email;

}

});

}
