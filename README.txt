FinClarity Solutions Website V4 — Executive Polish

DEPLOYMENT (GitHub Pages)
1. Extract this ZIP.
2. Open the GitHub repository that publishes finclarity-solutions.
3. If Settings > Pages says main / (root), upload/replace ALL files from this folder directly in the repository root.
4. Confirm these files are side-by-side at root: index.html, style.css, script.js, finclarity-logo-header.png, finclarity-logo.png, portfolio-showcase.png.
5. Commit the changes and wait for the Pages workflow to finish.
6. Open the live site and hard refresh (Ctrl+F5).

This version uses cache-busting query strings (style.css?v=4.0.0 and script.js?v=4.0.0) to prevent the browser from mixing a new index.html with an older stylesheet/script.
