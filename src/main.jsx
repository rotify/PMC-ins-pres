import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ── GLOBAL IMAGE FALLBACK ──────────────────────────────────
// This is a preview build — real photo assets (book covers, founder
// photos, event photos) are not bundled here. Any <img> that fails to
// load is swapped for a clean solid-color placeholder instead of the
// browser's broken-image icon, so the preview always looks intentional.
// Once real photos are added to /public, this fallback simply never fires.
const PLACEHOLDER_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">' +
      '<defs>' +
        '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#0a1628"/>' +
          '<stop offset="0.55" stop-color="#0f2444"/>' +
          '<stop offset="1" stop-color="#1c3a6e"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="600" height="600" fill="url(#g)"/>' +
      // decorative corner frame
      '<rect x="40" y="40" width="520" height="520" fill="none" stroke="#c9a227" stroke-width="1.5" opacity="0.5"/>' +
      // gold ring + monogram
      '<circle cx="300" cy="250" r="74" fill="none" stroke="#c9a227" stroke-width="2.5"/>' +
      '<text x="300" y="250" font-family="Georgia, serif" font-size="58" font-style="italic" ' +
        'fill="#e3c869" text-anchor="middle" dy="0.36em">PMC</text>' +
      // tagline
      '<text x="300" y="372" font-family="Georgia, serif" font-size="30" letter-spacing="1" ' +
        'fill="#ffffff" text-anchor="middle">Every Picture Tells a Story</text>' +
      '<text x="300" y="410" font-family="Arial, sans-serif" font-size="13" letter-spacing="4" ' +
        'fill="#6b97d4" text-anchor="middle">PMC COLLECTIVE</text>' +
      // small gold dot divider
      '<circle cx="300" cy="440" r="3" fill="#c9a227"/>' +
    '</svg>'
  );

document.addEventListener(
  'error',
  (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG' && target.src !== PLACEHOLDER_IMG) {
      target.src = PLACEHOLDER_IMG;
      target.style.objectFit = 'contain';
      target.style.background = '#0f2444';
    }
  },
  true
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
