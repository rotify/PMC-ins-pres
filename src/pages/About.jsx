import { useNavigation } from '../context/NavigationContext';
import '../styles/About.css';
import { SectionHeader } from '../components/Shared';
import { VALUES, CONTACT_INFO } from '../data/siteData';

export default function About() {
  const { navigate } = useNavigation();

  return (
    <div className="page">

      <section className="about-hero">
        <div className="about-hero__inner">
          <h1 className="about-hero__title">About<span>PMC Collective</span></h1>
          <p className="about-hero__subtitle">Empowering Leaders, Transforming Lives, Building Futures</p>
          <div className="about-hero__stats">
            {[
              { num: '5+', label: 'Years of Impact' },
              { num: '1,000+', label: 'Lives Transformed' },
              { num: '50+', label: 'Programmes' },
            ].map((s) => (
              <div key={s.label}>
                <span className="about-hero__stat-num">{s.num}</span>
                <span className="about-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader tag="Our Journey" title="Our Story and Purpose" />
          <div className="story-grid">

            <div className="story-card">
              <div className="story-card__header"><i className="fas fa-book-open" /><h3>Our Story</h3></div>
              <div className="story-card__body">
                <p>PMC Collective was born from a vision to create a platform that nurtures entrepreneurship, leadership, positive mindsets, creativity, and personal growth. Founded by Tricia Chris-Omon, we serve as a beacon for individuals seeking meaningful transformation in business, education, ministry, and personal development.</p>
                <p>Through thought-provoking content, transformative training sessions, and impactful initiatives, we equip people to become catalysts for change in their respective fields. We are committed to the long game, building not just skills, but character.</p>
                <p>What started as a local vision has grown into a movement that has touched lives across continents. We are not done, we are just getting started.</p>
                <div className="story-points">
                  {['Entrepreneurship Development', 'Leadership Training', 'Personal Growth Coaching', 'Community Building'].map((p) => (
                    <div className="story-point" key={p}><i className="fas fa-check-circle" /> {p}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-card__header"><i className="fas fa-bullseye" /><h3>Our Mission</h3></div>
              <div className="story-card__body">
                <div className="mission-highlight">
                  <p className="mission-statement">"To empower individuals with the knowledge, skills, and confidence needed to accelerate action and create lasting positive change in their communities and beyond."</p>
                </div>
                <div className="mission-goals">
                  {[
                    { icon: 'fas fa-rocket', title: 'Our Goal', text: 'Transform individuals into empowered leaders who drive meaningful change in their communities and industries.' },
                    { icon: 'fas fa-cogs', title: 'Our Approach', text: 'Combining practical training, mentorship, and community support to create sustainable personal and professional growth.' },
                    { icon: 'fas fa-chart-line', title: 'Our Impact', text: 'Creating ripple effects of positive change through every individual we empower and every community we touch.' },
                  ].map((g) => (
                    <div className="mission-goal" key={g.title}><h4><i className={g.icon} /> {g.title}</h4><p>{g.text}</p></div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-img-wrap">
              <img src="/pmc new.jpg" alt="Tricia Chris-Omon" />
              <span className="founder-badge">Founder and CEO</span>
            </div>
            <div className="founder-bio">
              <h2 className="founder-bio__name">Tricia Chris-Omon</h2>
              <span className="founder-bio__role">Visionary Leader and Mentor</span>
              <div className="founder-bio__text">
                <p>Tricia is a visionary leader, entrepreneur, and mentor with a profound passion for empowering individuals to reach their full potential. With extensive experience in business development, leadership training, and ministry, she founded PMC Collective to create a platform for transformative change.</p>
                <p>Her journey is marked by a commitment to excellence and a deep understanding of what it takes to succeed in today's dynamic world. Through PMC Collective, she shares her wealth of knowledge and experience to inspire others to achieve their dreams.</p>
                <p>She is also the author of three acclaimed books: "Magical Tales of Happy Tots," "The Uplift Kit," and "The Golden Seeds," each a testament to her belief that words have the power to transform lives.</p>
              </div>
              <div className="founder-quote">
                <i className="fas fa-quote-left" />
                <p>"True success is measured not by what we achieve for ourselves, but by what we enable others to achieve."</p>
                <cite>- Tricia Chris-Omon</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeader tag="Our Foundation" title="Our Core Values" desc="The principles that guide everything we do at PMC Collective." />
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon"><i className={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whatsapp-cta">
        <div className="container">
          <div className="whatsapp-cta__inner">
            <div style={{ fontSize: '2.5rem', color: 'white' }}><i className="fab fa-whatsapp" /></div>
            <div>
              <h3>Join Our WhatsApp Community</h3>
              <p>Connect with hundreds of inspired individuals, get updates, resources, and daily motivation.</p>
            </div>
            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="btn"><i className="fab fa-whatsapp" /> Join the Community</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="founder-grid" style={{ gap: '3rem' }}>
            <div className="founder-bio">
              <h3 style={{ fontSize: '2rem', color: 'var(--ink)', marginBottom: '1rem' }}>Continuing the Journey</h3>
              <p style={{ marginBottom: '1rem' }}>Tricia continues to lead PMC Collective with unwavering dedication, constantly innovating and expanding our reach to touch more lives. Her leadership exemplifies our core values and commitment to excellence.</p>
              <p>Through her guidance, PMC Collective has grown from a vision into a movement that continues to inspire and transform lives across communities. We are building something that will outlast us, and that is the point.</p>
            </div>
            <div className="founder-img-wrap"><img src="/pmc 3.jpg" alt="Tricia Chris-Omon, Visionary Leader" /></div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Begin Your Transformation?</h2>
          <p>Join our community of empowered individuals and discover how PMC Collective can help you achieve your personal and professional goals.</p>
          <button className="btn btn--primary" onClick={() => navigate('contact')}><i className="fas fa-arrow-right" /> Start Your Journey Today</button>
        </div>
      </section>

    </div>
  );
}
