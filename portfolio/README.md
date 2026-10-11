# Nguyễn Giang Linh — Game Designer Portfolio

A responsive static portfolio made with HTML, Tailwind CSS (CDN), custom CSS, and vanilla JavaScript. No build step or framework is required; the project is ready to publish with GitHub Pages.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Publish on GitHub Pages

1. Push the project files to a GitHub repository.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then save.

## Customize before publishing

- **Avatar:** put the file in `assets/`, then replace the `.avatar-placeholder` block in the hero section of `index.html` with `<img class="avatar-image" src="assets/your-avatar.jpg" alt="Nguyễn Giang Linh">`.
- **Project covers:** replace each `.project-placeholder` block in `index.html` with an image, for example `<img class="project-image" src="assets/casual-game.jpg" alt="Gameplay screenshot">`. The three cards are marked `PROJECT IMAGE 1–3`.
- **Project detail gallery:** in `script.js`, replace `.mission-image-slot` and `.mission-thumbs` in the briefing template with `<img>` elements. Use relative paths such as `assets/casual-game-01.jpg` so GitHub Pages can load them.
- Update the email, phone number, LinkedIn URL, experience dates, and project links as needed.
- Tailwind CSS and Google Fonts are loaded from CDNs, so those enhancements require an internet connection. The page itself is static and has no build step.
- The boot screen appears on each page load and completes after the browser's `load` event.

## Source map

- `index.html` contains the content and has inline notes beside the avatar, each project cover, and the project detail dialog.
- `style.css` contains the original shared component styles; `cyberpunk.css` contains typography and boot-sequence animation; `portfolio-hud.css` contains the page HUD, responsive rules, and optional `.avatar-image` / `.project-image` sizing.
- `script.js` contains interaction behavior. Comments mark the navigation, project filter/details, scroll reveals, and loading sequence.

## Files

- `index.html` — page content, section structure, and Tailwind CDN setup
- `style.css` — cyberpunk visual effects, component styling, and responsive behavior
- `cyberpunk.css` — typography and cinematic system-boot scene
- `portfolio-hud.css` — portfolio HUD styling, responsive layouts, motion, and project briefing dialog
- `script.js` — mobile navigation, active section state, project filters/details, scroll reveals, cursor halo, footer year, and loading sequence
- `assets/` — reserved for future portfolio visuals
