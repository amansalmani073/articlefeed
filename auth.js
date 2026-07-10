import {auth} from './firebase.js';import {onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';
export function protectPage(){onAuthStateChanged(auth,user=>{if(!user)location.replace('login.html');else document.documentElement.classList.add('authenticated')})}
export function showUserEmail(id){onAuthStateChanged(auth,user=>{const el=document.getElementById(id);if(el&&user)el.textContent=user.email||'Admin'})}
export async function logout(){await signOut(auth);location.replace('login.html')}
