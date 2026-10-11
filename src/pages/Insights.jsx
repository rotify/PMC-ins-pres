import { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/Insights.css';
import { SectionHeader } from '../components/Shared';
import { POSTS, PAYMENT_CONFIG } from '../data/siteData';

// ── HOME TEASER: shows the 3 latest posts, links to the full page ──
export function InsightsTeaser() {
  const { navigate } = useNavigation();
  const latest = useMemo(
    () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3),
    []
  );
  if (!latest.length) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          tag="Insights & Events"
          title="Tips, Articles & What's Coming Up"
          desc="Fresh parenting insights and upcoming events — new posts added regularly."
        />
        <div className="insights-grid">
          {latest.map((p) => (
            <article key={p.slug} className="insight-card" onClick={() => navigate('insights')}>
              <div className="insight-card__img insight-card__img--placeholder">
                <i className={p.type === 'event' ? 'fas fa-calendar-star' : 'fas fa-lightbulb'} />
              </div>
              <div className="insight-card__body">
                <span className={`insight-badge insight-badge--${p.type}`}>
                  {p.type === 'event' ? 'Event' : 'Parenting Tip'}
                </span>
                <h3>{p.title}</h3>
                <p className="insight-card__excerpt">{p.excerpt}</p>
                <div className="insight-card__foot">
                  <span className="insight-card__date">{fmtDate(p.date)}</span>
                  <span className="insight-card__read">Read more <i className="fas fa-arrow-right" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button className="btn btn--dark" onClick={() => navigate('insights')}>
            <i className="fas fa-book-open" /> View All Insights &amp; Events
          </button>
        </div>
      </div>
    </section>
  );
}

const FILTERS = [
  { id: 'all',      label: 'All' },
  { id: 'article',  label: 'Parenting Tips' },
  { id: 'event',    label: 'Events' },
];

function fmtDate(iso) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch { return iso; }
}

// WhatsApp link for the CTA on each post
function ctaLink(post) {
  const num = PAYMENT_CONFIG.whatsappNumber;
  const msg = post.type === 'event'
    ? `Hello PMC Collective! I'd like to reserve a seat for: ${post.title}.`
    : `Hello PMC Collective! I just read "${post.title}" and I'd love the free parenting toolkit.`;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

export default function Insights() {
  const [active, setActive] = useState('all');
  const [openPost, setOpenPost] = useState(null);

  const sorted = useMemo(
    () => [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)),
    []
  );
  const filtered = active === 'all' ? sorted : sorted.filter(p => p.type === active);

  // ── Full-post reading view ──
  if (openPost) {
    const p = openPost;
    return (
      <div className="page insights-page">
        <article className="insight-read">
          <button className="insight-read__back" onClick={() => setOpenPost(null)}>
            <i className="fas fa-arrow-left" /> Back to all
          </button>

          <span className={`insight-badge insight-badge--${p.type}`}>
            {p.type === 'event' ? 'Event' : 'Parenting Tip'}
          </span>
          <h1 className="insight-read__title">{p.title}</h1>
          <div className="insight-read__meta">
            <span><i className="fas fa-user-edit" /> {p.author}</span>
            <span><i className="fas fa-calendar" /> {fmtDate(p.date)}</span>
          </div>

          {p.image && (
            <div className="insight-read__img"><img src={p.image} alt={p.title} /></div>
          )}

          {p.type === 'event' && (
            <div className="insight-event-box">
              {p.eventDate && <div><i className="fas fa-clock" /> {p.eventDate}</div>}
              {p.eventLocation && <div><i className="fas fa-map-marker-alt" /> {p.eventLocation}</div>}
            </div>
          )}

          <div className="insight-read__body">
            {p.body.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
          </div>

          {p.tags && (
            <div className="insight-read__tags">
              {p.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          )}

          <div className="insight-cta">
            <div className="insight-cta__text">
              <i className="fas fa-gift" />
              <span>{p.type === 'event' ? 'Want to attend? Reserve your seat.' : 'Get the free parenting toolkit on WhatsApp.'}</span>
            </div>
            <a href={ctaLink(p)} target="_blank" rel="noreferrer" className="btn btn--primary">
              <i className="fab fa-whatsapp" /> {p.type === 'event' ? 'Reserve a Seat' : 'Get the Free Toolkit'}
            </a>
          </div>
        </article>
      </div>
    );
  }

  // ── List view ──
  return (
    <div className="page insights-page">
      <section className="insights-hero">
        <div className="insights-hero__inner">
          <h1>Insights &amp; Events</h1>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p>Practical parenting tips, articles, and upcoming events from Tricia Chris-Omon and PMC Collective.</p>
        </div>
      </section>

      <div className="insights-filter">
        <div className="insights-filter__btns">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`insights-filter__btn${active === f.id ? ' active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader
            tag={`${filtered.length} ${filtered.length === 1 ? 'post' : 'posts'}`}
            title="Latest from PMC Collective"
            desc="New tips and events are added regularly — check back often."
          />

          <div className="insights-grid">
            {filtered.map((p) => (
              <article key={p.slug} className="insight-card" onClick={() => { setOpenPost(p); window.scrollTo({ top: 0 }); }}>
                {p.image
                  ? <div className="insight-card__img"><img src={p.image} alt={p.title} loading="lazy" /></div>
                  : <div className="insight-card__img insight-card__img--placeholder">
                      <i className={p.type === 'event' ? 'fas fa-calendar-star' : 'fas fa-lightbulb'} />
                    </div>}
                <div className="insight-card__body">
                  <span className={`insight-badge insight-badge--${p.type}`}>
                    {p.type === 'event' ? 'Event' : 'Parenting Tip'}
                  </span>
                  <h3>{p.title}</h3>
                  {p.type === 'event' && p.eventDate && (
                    <p className="insight-card__when"><i className="fas fa-clock" /> {p.eventDate}</p>
                  )}
                  <p className="insight-card__excerpt">{p.excerpt}</p>
                  <div className="insight-card__foot">
                    <span className="insight-card__date">{fmtDate(p.date)}</span>
                    <span className="insight-card__read">Read more <i className="fas fa-arrow-right" /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
