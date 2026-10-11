import { useRef, useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/Vision.css';
import { SectionHeader } from '../components/Shared';
import { VISION_ASPIRATIONS, TIMELINE } from '../data/siteData';

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

export default function Vision() {
  const { navigate } = useNavigation();
  const [cardsRef, cardsInView]       = useInView();
  const [timelineRef, timelineInView] = useInView();

  return (
    <div className="page">

      <section className="vision-hero">
        <div className="vision-hero__inner">
          <h1>Our <em>Vision</em></h1>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p>A world where every individual has the knowledge, tools, and community to lead with purpose and create lasting impact.</p>
        </div>
      </section>

      <section className="vision-statement">
        <div className="container">
          <div className="vision-statement__quote">
            <blockquote>"We envision a generation of purpose-driven African leaders, bold, equipped, and connected, who are transforming their communities and shaping the future of the continent and beyond."</blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader tag="Where We Are Headed" title="Our Aspirations" desc="Four pillars that define the future we are actively building toward." />
          <div className="aspirations-grid" ref={cardsRef}>
            {VISION_ASPIRATIONS.map((a, i) => (
              <div key={a.title} className={`aspiration-card${cardsInView ? ' aspiration-card--visible' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="aspiration-card__icon"><i className={a.icon} /></div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <SectionHeader tag="Our Story So Far" title="The PMC Journey" desc="Every milestone is a testament to the power of vision, persistence, and community." />
          <div className="timeline" ref={timelineRef}>
            {TIMELINE.map((item, i) => (
              <div key={item.year} className={`timeline-item${timelineInView ? ' timeline-item--visible' : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="timeline-dot">{item.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-cta">
        <div className="container">
          <h2>Be Part of the Vision</h2>
          <p>We are building something that will outlast us. Join us in creating the Africa, and the world, we know is possible.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn--primary" onClick={() => navigate('contact')}><i className="fas fa-handshake" /> Get Involved</button>
            <button className="btn btn--outline" onClick={() => navigate('mission')}><i className="fas fa-bullseye" /> Our Mission</button>
          </div>
        </div>
      </section>

    </div>
  );
}
