import { useRef, useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/PartnersSection.css';
import { SectionHeader } from './Shared';
import { PROFILE_STATS, PROFILE_TITLES } from '../data/siteData';

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function PartnersSection() {
  const { navigate } = useNavigation();
  const [ref, inView] = useInView();

  return (
    <section className="partners-sec" ref={ref}>
      <div className="container">
        <SectionHeader tag="Partner With Us" title="Women in Business" desc="The founder's story, and an invitation for NGOs and organisations to partner with our mission." light />

        <div className="partners-sec__grid">
          {/* Profile card */}
          <div className={`partners-sec__profile ${inView ? 'in' : ''}`}>
            <div className="partners-sec__photo">
              <img src="/pmc new.jpg" alt="Tricia Chris-Omon" />
            </div>
            <h3>Tricia Chris-Omon</h3>
            <p className="partners-sec__aka">Tricia Chris-Omon · Founder, PMC Collective</p>
            <div className="partners-sec__titles">
              {PROFILE_TITLES.slice(0, 5).map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>

          {/* Story + stats + CTA */}
          <div className={`partners-sec__body ${inView ? 'in' : ''}`}>
            <p className="partners-sec__story">
              A retired banker of nearly 30 years turned educator, author, and parenting coach. Tricia founded D'Cherub Schools in Lagos, authored the Uplift Trilogy, and built PMC Collective into a platform reaching over 300 parents and countless young people across Nigeria and the diaspora.
            </p>

            <blockquote className="partners-sec__quote">
              "Every child is not a problem to be managed. Every child is a purpose waiting to be discovered."
            </blockquote>

            <div className="partners-sec__stats">
              {PROFILE_STATS.map((s) => (
                <div key={s.label} className="partners-sec__stat">
                  <span className="partners-sec__stat-num">{s.number}</span>
                  <span className="partners-sec__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Donate a Book banner */}
            <div className="partners-sec__donate">
              <div className="partners-sec__donate-text">
                <div className="partners-sec__donate-icon"><i className="fas fa-book" /></div>
                <div>
                  <h4>Donate a Book Today</h4>
                  <p>Help us put the Uplift Trilogy into more schools, homes, and communities across Nigeria.</p>
                </div>
              </div>
              <button className="btn btn--dark" onClick={() => navigate('contact')}>
                <i className="fas fa-hand-holding-heart" /> Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
