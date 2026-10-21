# Writer portfolio

A buildless, responsive editorial portfolio. All visitor assets are in `dist/`; there are no dependencies, analytics, external fonts, or backend services.

## Preview

From this directory: `python3 -m http.server 4173 --directory dist`

Open http://localhost:4173. Edit `dist/index.html`, `dist/style.css`, and `dist/script.js` directly. Fonts use Georgia and system Arial so text remains available without third-party services.

## Personalize before applying

- Replace both “Your Name” wordmarks, the page title, and the description.
- Three expanded X articles are published in `dist/articles/`: reinsurance, Ethereum proof verification, and stablecoin confidentiality. All three include original-post links and primary sources. The confidentiality article is an editorial perspective, not a copywriting sample.
- Replace the about introduction, specialties, location/time zone, and opportunity preferences.
- Replace the contact placeholder with an actual `<a href="mailto:YOUR_EMAIL">YOUR_EMAIL ↗</a>`. There is deliberately no pretend submission form or fake email link.
- Remove placeholder labels, the work note, and instructional copy after filling the content.
- Keep or remove the `noindex,nofollow` robots directive according to your indexing preference. It does not provide access control.
- Verify the published Site audience before using it in applications. This Site is public; the GitHub source repository `chudichukwu/writer-port` is private. Preserve these audiences.

## Interaction and accessibility

Category filters use native buttons and pressed states with a live result count. Includes skip navigation, visible focus, reduced-motion support, responsive layouts, and semantic headings. All sample art is decorative typography, not a claim of published work.
