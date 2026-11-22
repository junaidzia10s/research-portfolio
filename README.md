# Junaid Zia — Swiss-inspired academic research portfolio

A self-contained, no-build, GitHub Pages website with an in-browser editor.
Inspired by Swiss International Typographic Style and a restrained red / white / graphite airline-inspired palette; **not affiliated with any airline**.

## What's in the folder
- `index.html` — homepage, research/projects, clickable awards, background
- `project.html` — shareable detail pages for each project (`project.html?project=mos2-transistors`)
- `editor.html` — optional content/design editor; needs no account or server
- `site-data.js` — editable single-source-of-truth for content, projects, awards, photos, fonts and colours
- `styles.css` — styles; override typography, layout, colours if desired
- `main.js` — rendering, project filters, awards, menu and detail pages
- `editor.js`, `editor.css` — visual editing interface
- `assets/` — SVG diagrams, portrait placeholder and favicon

## Publish on GitHub Pages (no build step)
1. Unzip this package. Open your GitHub repository.
2. Upload **the files inside this folder** to the *repository root* (not inside another nested folder), commit the changes.
3. Under `Settings → Pages`, choose `Deploy from a branch`, `main`, and `/(root)`; Save.
4. Open `https://YOUR-USERNAME.github.io/YOUR-REPO/` once Pages finishes building.
5. If you are replacing the old site, upload/overwrite the old files including `index.html` in the **same repository**. Don't create a new repository.

## Updating content WITHOUT editing code
1. Visit `https://YOUR-USERNAME.github.io/YOUR-REPO/editor.html` or open `editor.html` locally.
2. Use the tabs to change profile text, add/reorder projects, add awards, and customize colours/fonts.
3. For a photo: in the editor, choose an image from your computer. It is compressed and embedded into the generated file, so you don't need to manage a separate images folder. This is best for a few optimized photos (ideally below 1 MB each after resizing). You can also type `assets/my-photo.jpg` if you prefer to upload a separate image to GitHub.
4. Click `Preview changes` to open a temporary local-browser preview. Preview is NOT published and is visible only to your browser.
5. Click `Download site-data.js`. It contains all your changes.
6. On GitHub, open your repository, choose `Add file → Upload files`, drag in the new `site-data.js`, and commit it. This makes your updates public after Pages rebuilds.

IMPORTANT: because GitHub Pages is static, the editor cannot silently publish your changes to GitHub. You must upload the exported file. The editor does **not** send your images or data to a third-party service.

## Direct editing with GitHub's web interface
- Open `site-data.js` on GitHub and click the pencil (Edit).
- Edit a title, paragraphs, image path, award, project, or font setting; commit.
- Keep quotation marks and commas valid JavaScript.

## Image tips
- The bundled SVGs are **illustrations**, not authentic lab photos or experimental screenshots.
- Replace the portrait placeholder with your own consented portrait.
- Replace project cover diagrams with your actual COMSOL plots, wafer-classification screenshots, and wearable hardware images when possible.
- Only publish photos, names, logos and university/industry material you are authorised to show.
- Do not upload your private academic transcript, passport, signed recommendation letters, confidential internship notes, or any sensitive data.

## Where to change colours and fonts
You can edit them visually in `editor.html`, or modify `settings` at the top of `site-data.js`:
- `accent` — e.g. `#C8102E`
- `background` — e.g. `#F8F8F6`
- `headingFont` — `Manrope`, `Inter`, `DM Sans`, `IBM Plex Sans`, or `Outfit`
- `bodyFont` — same options

## Academic honesty
- The data are based on user-provided academic details and letters. Check each before making the site public.
- University and competition awards are described carefully. Never imply an in-preparation paper is published.
- Some experience/competition dates are currently broad estimates; verify them before public release.
- All numerical results in the MoS₂ project are explicitly **simulated** results.
