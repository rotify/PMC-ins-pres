import { useRef, useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/Mission.css';
import { SectionHeader } from '../components/Shared';
import { MISSION_POINTS, IMPACT_STATS, METHODOLOGIES } from '../data/siteData';

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

export default function Mission() {
  const { navigate } = useNavigation();
  const [cardsRef, cardsInView] = useInView();

  return (
    <div className="page">

      <section className="mission-hero">
        <div className="mission-hero__inner">
          <h1>Our Mission</h1>
          <p>Driving Transformational Change Through Empowerment</p>
        </div>
      </section>

      <section className="section mission-statement-section">
        <div className="container">
          <div className="mission-intro">
            <h2>Our Driving Purpose</h2>
            <div className="divider" />
            <p>To empower individuals with the knowledge, mindset, and skills needed to lead, innovate, and transform their world. We are committed to building a generation of visionary leaders who create meaningful impact in their communities and beyond.</p>
          </div>
          <div className="mission-points-grid" ref={cardsRef}>
            {MISSION_POINTS.map((p, i) => (
              <div key={p.title} className={`mission-card ${cardsInView ? 'mission-card--visible' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mission-card__icon"><i className={p.icon} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-text">
              <h3>Our Transformational Approach</h3>
              <p>At PMC Collective, we believe in a holistic approach to empowerment that combines practical strategies with motivational support. Our methodology is designed to create lasting transformation through actionable insights and personalised guidance.</p>
              <p>We bridge the gap between inspiration and implementation by providing tangible tools, frameworks, and support systems that help our members turn their aspirations into reality. We do not just inspire, we walk alongside you.</p>
            </div>
            <div className="approach-box">
              <h4>Key Methodologies</h4>
              <ul className="approach-list">
                {METHODOLOGIES.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <SectionHeader tag="Proof of Work" title="Our Measurable Impact" desc="Numbers do not lie. Here is what we have built together." />
          <div className="impact-grid">
            {IMPACT_STATS.map((s) => (
              <div className="impact-card" key={s.label}>
                <span className="impact-number">{s.number}</span>
                <span className="impact-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-cta">
        <div className="container">
          <h2>Ready to Transform Your Journey?</h2>
          <p>Join us and become part of a movement that is building the next generation of purpose-driven leaders.</p>
          <button className="btn btn--dark" onClick={() => navigate('contact')}><i className="fas fa-arrow-right" /> Get Involved</button>
        </div>
      </section>

    </div>
  );
}
