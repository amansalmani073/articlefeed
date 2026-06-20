```javascript id="d4i7wq"
import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

/*
=================================
LOAD POSTS FOR HOMEPAGE
=================================
*/

export async function loadLatestPosts() {

const container =
document.getElementById("latestPosts");

if (!container) return;

try {

const q = query(
collection(db, "posts"),
orderBy("createdAt", "desc")
);

const snapshot =
await getDocs(q);

container.innerHTML = "";

snapshot.forEach((postDoc) => {

const post = postDoc.data();

container.innerHTML += `

<div class="post-card">

<h3>${post.title || ""}</h3>

<p>${post.metaDescription || ""}</p>

<a href="post.html?id=${postDoc.id}" class="btn">
Read More
</a>

</div>

`;

});

} catch (error) {

console.error(error);

}

}

/*
=================================
LOAD POSTS FOR BLOGS PAGE
=================================
*/

export async function loadAllPosts() {

const container =
document.getElementById("blogContainer");

if (!container) return;

try {

const q = query(
collection(db, "posts"),
orderBy("createdAt", "desc")
);

const snapshot =
await getDocs(q);

container.innerHTML = "";

snapshot.forEach((postDoc) => {

const post = postDoc.data();

container.innerHTML += `

<div class="blog-card">

<img
src="${
post.image ||
'https://via.placeholder.com/600x400'
}"
alt="${post.title}">

<div class="blog-content">

<span class="blog-category">
${post.category || "General"}
</span>

<h3>
${post.title || ""}
</h3>

<p>
${post.metaDescription || ""}
</p>

<a
href="post.html?id=${postDoc.id}"
class="read-more">

Read More →

</a>

</div>

</div>

`;

});

} catch (error) {

console.error(error);

}

}

/*
=================================
LOAD SINGLE POST
=================================
*/

export async function loadSinglePost() {

const title =
document.getElementById("postTitle");

if (!title) return;

const params =
new URLSearchParams(
window.location.search
);

const id =
params.get("id");

if (!id) return;

try {

const postRef =
doc(db, "posts", id);

const postSnap =
await getDoc(postRef);

if (!postSnap.exists()) {

title.innerHTML =
"Article Not Found";

return;

}

const post =
postSnap.data();

document.title =
post.seoTitle || post.title;

document.getElementById(
"postTitle"
).innerHTML =
post.title || "";

document.getElementById(
"postCategory"
).innerHTML =
post.category || "";

document.getElementById(
"postContent"
).innerHTML =
post.content || "";

const image =
document.getElementById(
"postImage"
);

if (image) {

image.src =
post.image ||
"https://via.placeholder.com/1200x700";

}

} catch (error) {

console.error(error);

}

}

/*
=================================
AUTO LOAD
=================================
*/

document.addEventListener(
"DOMContentLoaded",
() => {

loadLatestPosts();

loadAllPosts();

loadSinglePost();

});
```

