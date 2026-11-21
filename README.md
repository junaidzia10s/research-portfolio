# Junaid Zia — Research & Engineering Portfolio

A standalone, responsive static research portfolio designed for GitHub Pages. No framework, hosting subscription, build steps, tracking scripts, or paid integrations needed.

## View locally

Double-click `index.html` in a browser. An internet connection is only needed to fetch the optional Google Fonts; the site works with built-in system fonts offline.

## Publish with GitHub Pages

1. Sign into GitHub and create a **public** repository, for example `research-portfolio`.
2. Choose **Add file → Upload files** and drag all **seven site files** from this folder (not the ZIP) into the repository root: `index.html`, `research.html`, `styles.css`, `script.js`, `favicon.svg`, `cover.png`, `.nojekyll`. The README is optional but recommended.
3. Commit the changes to the `main` branch.
4. Open **Settings → Pages**. Select **Deploy from a branch**, with `main` and `/(root)`, then **Save**.
5. After GitHub publishes the page, it will be available at `https://YOUR-USERNAME.github.io/research-portfolio/`.

For a shorter address, create a repository named `YOUR-USERNAME.github.io` instead; its URL will be `https://YOUR-USERNAME.github.io/`.

## Before publishing: personalise your contact links

Open `script.js` and fill in any of these lines with your real details:

```js
const CONTACT = {
  email: 'your-confirmed-email@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile/',
  github: 'https://github.com/your-username',
  cvPdf: ''
};
```

Empty values stay hidden. After you produce the Europass CV, upload the PDF to the same repository and set `cvPdf: 'Junaid-Zia-CV.pdf'` to display a download link. Don't upload recommendation letters, full transcripts, a passport, or any unpublished manuscript without explicit permission.

## Accuracy notes

- The numerical chart compares only two **simulation endpoints**, at 0% and 0.7% tensile strain. No intermediate measurements are implied.
- The wafer visualization and device illustrations are **conceptual**, not photographs, raw experiment output, or CNN inference screenshots.
- The Taiwan industrial-training grade and degree details are corroborated by the user's university documents. Research descriptions are supplied by the portfolio owner and should be approved before public release.
- No peer-reviewed publication, patent, or funding status is claimed.

## Files

- `index.html`: accessible semantic homepage
- `research.html`: in-depth MoS₂ research case study
- `styles.css`: responsive editorial visual design
- `script.js`: mobile navigation, reveal animation, schematic wafer visualization, optional contact links
- `favicon.svg`: minimalist site icon
- `cover.png`: social sharing image
- `.nojekyll`: tells GitHub Pages not to run Jekyll

© 2026 Junaid Zia. All project and university names belong to their respective owners.

## Detailed research page

`research.html` provides the in-depth MoS₂ case study linked from the homepage. Check all numerical parameters and interpretations against your final FYP report before making it public. Upload `research.html` too.
