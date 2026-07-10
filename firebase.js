import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";
const firebaseConfig={apiKey:"AIzaSyDuwzfLoj2En-e93gCN-SXdCbBYgyblws8",authDomain:"articlefeed-4be15.firebaseapp.com",projectId:"articlefeed-4be15",storageBucket:"articlefeed-4be15.firebasestorage.app",messagingSenderId:"754859270659",appId:"1:754859270659:web:d4268cfd1731beb5dba436"};
const app=initializeApp(firebaseConfig);export const auth=getAuth(app);export const db=getFirestore(app);export const storage=getStorage(app);