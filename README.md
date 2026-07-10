# ArticleFeed – Production-ready Firebase publishing site

This package includes a redesigned responsive public website, Firebase Authentication admin panel, Firestore article management, Firebase Storage image uploads, SEO metadata, Article JSON-LD, robots.txt, sitemap.xml, a custom 404 page, and security rules.

## Before deployment

1. In Firebase Authentication, enable Email/Password and create the admin user.
2. Deploy `firestore.rules` and `storage.rules`.
3. Confirm the Firebase configuration in `js/firebase.js`.
4. The SEO files currently use `https://articlefeed-4be15.web.app`. Replace this value in `index.html`, `blogs.html`, `post.html`, `robots.txt`, and `sitemap.xml` if a custom domain is used.
5. Add published article URLs to `sitemap.xml` after publishing, or generate the sitemap during deployment.

## Firebase CLI deployment

```bash
firebase login
firebase use articlefeed-4be15
firebase deploy
```

## Important SEO note

Firestore articles are rendered in the browser. Google can render JavaScript, but server-side rendering or a static build that creates one HTML file per article is stronger for highly competitive SEO. The included dynamic metadata and Article schema improve the current implementation.

## Professional Editorial Redesign
This edition includes a fully redesigned public website and admin interface with an original editorial-journal visual system, responsive layouts, improved article reading experience, accessible navigation, structured SEO markup, and the existing Firebase publishing workflow.
