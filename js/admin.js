```javascript
import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy,
limit
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

/*
=================================
LOAD DASHBOARD STATS
=================================
*/

export async function loadDashboardStats() {

try {

const snapshot =
await getDocs(
collection(db, "posts")
);

let totalPosts = 0;
let publishedPosts = 0;
let draftPosts = 0;

snapshot.forEach((doc) => {

const post = doc.data();

totalPosts++;

if (post.status === "draft") {
draftPosts++;
} else {
publishedPosts++;
}

});

const totalElement =
document.getElementById("totalPosts");

const publishedElement =
document.getElementById("publishedPosts");

const draftElement =
document.getElementById("draftPosts");

if (totalElement)
totalElement.innerText = totalPosts;

if (publishedElement)
publishedElement.innerText = publishedPosts;

if (draftElement)
draftElement.innerText = draftPosts;

} catch (error) {

console.error(
"Dashboard Stats Error:",
error
);

}

}

/*
=================================
LOAD RECENT POSTS
=================================
*/

export async function loadRecentPosts() {

const container =
document.getElementById(
"recentPosts"
);

if (!container) return;

try {

const q = query(
collection(db, "posts"),
orderBy("createdAt", "desc"),
limit(5)
);

const snapshot =
await getDocs(q);

container.innerHTML = "";

if (snapshot.empty) {

container.innerHTML =
"<p>No articles found.</p>";

return;

}

snapshot.forEach((doc) => {

const post = doc.data();

container.innerHTML += `

<div class="recent-post-item">

<h4>
${post.title || "Untitled"}
</h4>

<p>
${post.category || "General"}
</p>

</div>

`;

});

} catch (error) {

console.error(
"Recent Posts Error:",
error
);

}

}

/*
=================================
LOAD CATEGORY COUNTS
=================================
*/

export async function loadCategoryStats() {

const categoryContainer =
document.getElementById(
"categoryStats"
);

if (!categoryContainer) return;

try {

const snapshot =
await getDocs(
collection(db, "posts")
);

const categories = {};

snapshot.forEach((doc) => {

const post = doc.data();

const category =
post.category || "General";

categories[category] =
(categories[category] || 0) + 1;

});

categoryContainer.innerHTML = "";

for (const category in categories) {

categoryContainer.innerHTML += `

<div class="category-item">

<strong>${category}</strong>

<span>
${categories[category]} Articles
</span>

</div>

`;

}

} catch (error) {

console.error(error);

}

}

/*
=================================
AUTO LOAD DASHBOARD
=================================
*/

document.addEventListener(
"DOMContentLoaded",
() => {

loadDashboardStats();

loadRecentPosts();

loadCategoryStats();

}
);
```

