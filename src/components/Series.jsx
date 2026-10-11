import '../styles/Series.css';
import { SectionHeader } from './Shared';
import { SERIES_INFO, SERIES_LINKS, PAYMENT_CONFIG } from '../data/siteData';

// WhatsApp link pre-filled to request the free toolkit
function toolkitLink() {
  const num = PAYMENT_CONFIG.whatsappNumber;
  const msg =
    `Hello PMC Collective! I'm watching *${SERIES_INFO.name}* and I'd love the ` +
    `free toolkit: ${SERIES_INFO.freebie}.`;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

// ── Shared inner content (used by both Home teaser and Hub section) ──
function SeriesContent({ compact = false }) {
  return (
    <div className={`series2${compact ? ' series2--compact' : ''}`}>
      {/* Visual side */}
      <div className="series2__visual">
        <div className="series2__poster">
          {SERIES_INFO.poster
            ? <img src={SERIES_INFO.poster} alt={SERIES_INFO.name} />
            : <div className="series2__poster-fallback"><i className="fas fa-child-reaching" /></div>}
          <span className="series2__count-badge">
            <strong>{SERIES_INFO.episodeCount}</strong> short films
          </span>
        </div>
      </div>

      {/* Text + actions side */}
      <div className="series2__body">
        <span className="series2__eyebrow">Now Showing · New Series</span>
        <h3 className="series2__title">{SERIES_INFO.name}</h3>
        <p className="series2__pitch">{SERIES_INFO.intro}</p>

        {/* Follow / watch buttons */}
        <div className="series2__watch">
          <span className="series2__watch-label">Watch every episode on</span>
          <div className="series2__socials">
            {SERIES_LINKS.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="series2__social"
                style={{ '--brand': s.color }}
              >
                <i className={s.icon} /> {s.platform}
              </a>
            ))}
          </div>
        </div>

        {/* WhatsApp toolkit capture */}
        <div className="series2__toolkit">
          <div className="series2__toolkit-text">
            <i className="fas fa-gift" />
            <span>{SERIES_INFO.freebie}</span>
          </div>
          <a href={toolkitLink()} target="_blank" rel="noreferrer" className="btn btn--primary">
            <i className="fab fa-whatsapp" /> Get the Free Toolkit
          </a>
        </div>
      </div>
    </div>
  );
}

// ── HOME TEASER ──
export function SeriesTeaser() {
  return (
    <section className="section series2-teaser-section">
      <div className="container">
        <SectionHeader
          tag="New Video Series"
          title={SERIES_INFO.name}
          desc={SERIES_INFO.tagline}
        />
        <SeriesContent compact />
      </div>
    </section>
  );
}

// ── HUB SECTION ──
export default function SeriesSection() {
  return (
    <section className="section hub-section series2-section" id="hub-series">
      <div className="container">
        <SectionHeader
          tag="Watch & Learn"
          title={SERIES_INFO.name}
          desc={SERIES_INFO.tagline}
        />
        <SeriesContent />
      </div>
    </section>
  );
}
