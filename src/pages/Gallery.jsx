import { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/Gallery.css';
import { SectionHeader } from '../components/Shared';
import { GALLERY_ITEMS } from '../data/siteData';

const FILTERS = [
  { id: 'all',        label: 'All' },
  { id: 'book-launch',label: 'Book Launch' },
  { id: 'community',  label: 'Community' },
  { id: 'workshops',  label: 'Workshops' },
];

export default function Gallery() {
  const [active, setActive]         = useState('all');
  const [lightbox, setLightbox]     = useState(null);
  const [visibleIds, setVisibleIds] = useState(new Set());
  const timersRef = useRef([]);

  const filtered = active === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === active);

  useEffect(() => {
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
    setVisibleIds(new Set());

    filtered.forEach((item, i) => {
      const t = setTimeout(() => {
        setVisibleIds(prev => new Set([...prev, item.id]));
      }, i * 70);
      timersRef.current.push(t);
    });

    return () => { timersRef.current.forEach(t => clearTimeout(t)); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleKey = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'Escape')     setLightbox(null);
    if (e.key === 'ArrowRight') setLightbox(i => (i + 1 < filtered.length ? i + 1 : 0));
    if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 >= 0 ? i - 1 : filtered.length - 1));
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const currentItem = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div className="page">

      <section className="gallery-hero">
        <div className="gallery-hero__inner">
          <h1>Our Gallery</h1>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p>Moments, memories, and milestones, a living record of the PMC Collective story.</p>
          <div className="gallery-hero__stats">
            {[{ num: '50+', label: 'Photos & Videos' }, { num: '10+', label: 'Events Captured' }, { num: '2020', label: 'Since' }].map(s => (
              <div key={s.label}><span className="gallery-hero__stat-num">{s.num}</span><span className="gallery-hero__stat-label">{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className="gallery-filter">
        <div className="filter-btns">
          {FILTERS.map(f => (
            <button key={f.id} className={`filter-btn${active === f.id ? ' active' : ''}`} onClick={() => { setActive(f.id); setLightbox(null); }}>{f.label}</button>
          ))}
        </div>
      </div>

      <section className="section gallery-section">
        <div className="container">
          <SectionHeader tag={`${filtered.length} item${filtered.length !== 1 ? 's' : ''}`} title="Captured Moments" desc="Every image tells a story of transformation, community, and purpose." />
          <div className="gallery-grid">
            {filtered.map((item, idx) => (
              <div key={item.id} className={`gallery-item${visibleIds.has(item.id) ? ' visible' : ''}`} onClick={() => setLightbox(idx)}>
                <div className="gallery-item__media">
                  {item.type === 'video' ? (
                    <>
                      <video src={item.src} poster={item.poster} muted playsInline preload="metadata" />
                      <div className="gallery-item__play"><i className="fas fa-play" /></div>
                    </>
                  ) : (
                    <img src={item.src} alt="" loading="lazy" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {currentItem && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}><i className="fas fa-times" /></button>
            {lightbox > 0 && <button className="lightbox__nav lightbox__nav--prev" onClick={() => setLightbox(i => i - 1)}><i className="fas fa-chevron-left" /></button>}
            {lightbox < filtered.length - 1 && <button className="lightbox__nav lightbox__nav--next" onClick={() => setLightbox(i => i + 1)}><i className="fas fa-chevron-right" /></button>}
            <div className="lightbox__media">
              {currentItem.type === 'video' ? (
                <video src={currentItem.src} poster={currentItem.poster} controls autoPlay />
              ) : (
                <img src={currentItem.src} alt="" />
              )}
            </div>
            <div className="lightbox__info">
              <div className="meta">
                <span>{lightbox + 1} / {filtered.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
