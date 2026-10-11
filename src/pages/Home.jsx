import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/Home.css';
import { SectionHeader, PaymentModal } from '../components/Shared';
import PartnersSection from '../components/PartnersSection';
import { SeriesTeaser } from '../components/Series';
import { InsightsTeaser } from './Insights';
import { STATS, SERVICES, BOOKS, TESTIMONIALS, EVENTS, ADIGUN_REVIEW, CONTACT_INFO } from '../data/siteData';

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ count, label, suffix, started }) {
  const val = useCounter(count, 1800, started);
  return (
    <div>
      <span className="hero__stat-number">{val.toLocaleString()}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Home() {
  const { navigate } = useNavigation();
  const [selectedBook, setSelectedBook]     = useState(null);
  const [statsStarted, setStatsStarted]     = useState(false);
  const [newsletter, setNewsletter]         = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [heroLoaded, setHeroLoaded]         = useState(false);

  const statsRef = useRef(null);
  const [booksRef,    booksInView]    = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [launchRef,   launchInView]   = useInView();
  const [reviewRef,   reviewInView]   = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsStarted(true); }, { threshold: 0.5 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page" style={{ paddingTop: 0 }}>

      {/* HERO — full background image, solid overlay, no gradient */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/comm celebration.jpg" alt="PMC Collective Community" />
        </div>

        <div className="container">
          <div className="hero__grid">
            <div className={`hero__content ${heroLoaded ? 'hero__content--visible' : ''}`}>
              <span className="hero__badge"><i className="fas fa-star" /> Empowering Since 2020</span>
              <h1 className="hero__title">
                Transform Your
                <span className="hero__title-accent">Leadership & Impact</span>
              </h1>
              <p className="hero__subtitle">
                PMC Collective equips individuals with the tools, mentorship, and community to lead with purpose, innovate boldly, and create lasting change.
              </p>
              <div className="hero__cta">
                <button className="btn btn--primary" onClick={() => navigate('contact')}><i className="fas fa-handshake" /> Join Our Community</button>
                <button className="btn btn--outline" onClick={() => navigate('about')}><i className="fas fa-play-circle" /> Learn More</button>
              </div>
              <div className="hero__stats" ref={statsRef}>
                {STATS.map((s) => <StatItem key={s.label} {...s} started={statsStarted} />)}
              </div>
            </div>
          </div>
        </div>
        <button className="hero__scroll" onClick={() => document.getElementById('books-impact')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>Scroll</span><i className="fas fa-chevron-down" />
        </button>
      </section>

      {/* BOOKS DROP — right after title, animated */}
      <section className="books-impact" id="books-impact" ref={booksRef}>
        <div className="container">
          <h2 className={`books-impact__title ${booksInView ? 'visible' : ''}`}>Books Making an <em>Impact</em></h2>
          <p className={`books-impact__sub ${booksInView ? 'visible' : ''}`}>Stories and wisdom that are transforming lives, one page at a time</p>
          <div className="books-impact__grid">
            {BOOKS.map((book, i) => (
              <div key={book.id} className={`book-drop ${booksInView ? 'book-drop--landed' : ''}`} style={{ animationDelay: `${i * 0.18}s` }}>
                <div className="book-drop__cover"><img src={book.image} alt={book.title} /></div>
                <div className="book-drop__info">
                  <h3>{book.title}</h3>
                  <div className="book-drop__price">
                    <span className="book-drop__old">&#8358;{book.oldPrice?.toLocaleString()}</span>
                    <span className="book-drop__new">&#8358;{book.price.toLocaleString()}</span>
                  </div>
                  <button className="btn btn--primary book-drop__btn" onClick={() => setSelectedBook(book)}><i className="fas fa-shopping-cart" /> Buy Now</button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn--outline" style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'var(--gold-light)' }} onClick={() => navigate('books')}>
              <i className="fas fa-book-open" /> View All Books
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" ref={servicesRef}>
        <div className="container">
          <SectionHeader tag="What We Offer" title="Our Core Services" desc="We serve individuals, communities, and organisations through programmes designed to activate lasting transformation." />
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className={`service-card ${servicesInView ? 'service-card--visible' : ''}`} style={{ animationDelay: `${i * 0.12}s` }} key={s.title}>
                <div className="service-card__icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="service-card__features">
                  {s.features.map((f) => <span className="service-card__feat" key={f}><i className="fas fa-check-circle" /> {f}</span>)}
                </div>
                <button className="service-card__link" onClick={() => navigate(s.link)}>Learn more <i className="fas fa-arrow-right" /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK LAUNCH — image only, no video */}
      <section className="book-launch section section--alt" id="book-launch" ref={launchRef}>
        <div className="container">
          <SectionHeader tag="Celebrating Success" title="Recent Book Launch" desc="Celebrating creativity, innovation, and self-development at The Glorious Nation Church" />

          <div className="launch__grid">
            <div className={`launch__media ${launchInView ? 'launch__media--visible' : ''}`}>
              <div className="launch__img-frame">
                <img src="/pmc 3.jpg" alt="Book Launch at The Glorious Nation Church" />
                <div className="launch__img-caption"><i className="fas fa-church" /><span>The Glorious Nation Church, Lagos</span></div>
              </div>
            </div>

            <div className={`launch__details ${launchInView ? 'launch__details--visible' : ''}`}>
              <h3>A Celebration of Creativity & Community</h3>
              <p>The recent book launch event brought together friends, family, and supporters in a beautiful celebration of creativity, innovation, and shared inspiration. We are now planning the next volume!</p>
              <div className="launch__highlights">
                {[
                  { icon: 'fas fa-church',      title: 'Beautiful Venue',         text: 'The Glorious Nation Church provided a perfect setting filled with positivity and inspiration.' },
                  { icon: 'fas fa-book-reader', title: 'Book Reviews & Insights', text: 'Three distinguished guests shared their insights on "Magical Tales of Happy Tots."' },
                  { icon: 'fas fa-utensils',    title: 'Community Fellowship',    text: 'Delicious meals shared in a joyful atmosphere of celebration and connection.' },
                ].map((h) => (
                  <div className="launch__highlight" key={h.title}>
                    <div className="launch__highlight-icon"><i className={h.icon} /></div>
                    <div><h4>{h.title}</h4><p>{h.text}</p></div>
                  </div>
                ))}
              </div>
              <button className="btn btn--primary" onClick={() => navigate('gallery')}><i className="fas fa-images" /> View Event Gallery</button>
            </div>
          </div>

          <div className={`adigun-review ${reviewInView ? 'adigun-review--visible' : ''}`} ref={reviewRef}>
            <div className="adigun-review__icon"><i className="fas fa-quote-left" /></div>
            <blockquote className="adigun-review__text">{ADIGUN_REVIEW}</blockquote>
            <div className="adigun-review__author">
              <div className="adigun-review__avatar"><i className="fas fa-user-tie" /></div>
              <div><strong>Mr. Adigun</strong><span>Distinguished Reviewer & Guest</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS — slashed prices */}
      <section className="section">
        <div className="container">
          <SectionHeader tag="From Our Hub" title="Featured Products" desc="Discover our handcrafted products and inspiring publications" />
          <div className="products-grid">
            {BOOKS.map((book) => (
              <div className="product-card" key={book.id}>
                <div className="product-card__badge">{book.badge}</div>
                <div className="product-card__img"><img src={book.image} alt={book.title} /></div>
                <div className="product-card__body">
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <div className="product-card__stars">
                    {Array.from({ length: Math.floor(book.rating) }).map((_, i) => <i className="fas fa-star" key={i} />)}
                    {book.rating % 1 !== 0 && <i className="fas fa-star-half-alt" />}
                    <span>{book.rating}/5.0</span>
                  </div>
                  <div className="product-card__footer">
                    <div className="product-card__pricing">
                      <span className="product-card__old">&#8358;{book.oldPrice?.toLocaleString()}</span>
                      <span className="product-card__price">&#8358;{book.price.toLocaleString()}</span>
                    </div>
                    <button className="btn btn--primary btn--sm" onClick={() => setSelectedBook(book)}><i className="fas fa-shopping-cart" /> Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn--dark" onClick={() => navigate('hub')}><i className="fas fa-store" /> Visit The Collective Hub</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionHeader tag="Community Voices" title="What People Are Saying" desc="Hear from those whose lives have been touched by PMC Collective." />
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                    <div className="testimonial-card__stars">{Array.from({ length: t.rating }).map((_, i) => <i className="fas fa-star" key={i} />)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader tag="Our Journey" title="Past Events & Flyers" desc="Relive the moments that have shaped our community." />
          <div className="events-grid">
            {EVENTS.map((e) => (
              <div className="event-card" key={e.title}>
                <img src={e.image} alt={e.title} />
                <div className="event-card__overlay">
                  <h3 className="event-card__title">{e.title}</h3>
                  <p className="event-card__meta"><i className="fas fa-calendar-alt" /> {e.date} - {e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWING GREAT KIDS — SERIES TEASER */}
      <SeriesTeaser />

      <InsightsTeaser />

      {/* PARTNERS / WOMEN IN BUSINESS */}
      <PartnersSection />

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <h2>Stay Inspired</h2>
          <p>Subscribe for updates on events, resources, and inspiration delivered to your inbox.</p>
          {newsletterSent ? (
            <p style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '1.1rem' }}><i className="fas fa-check" /> Thank you for subscribing!</p>
          ) : (
            <form className="newsletter__form" onSubmit={(e) => {
              e.preventDefault();
              if (!newsletter.includes('@')) return;
              fetch(`https://formspree.io/f/${CONTACT_INFO.formspreeId}`, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletter, _subject: 'New newsletter signup - PMC Collective' }),
              }).catch(() => {});
              setNewsletterSent(true);
            }}>
              <input className="newsletter__input" type="email" placeholder="Your email address" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} required />
              <button type="submit" className="btn btn--primary"><i className="fas fa-paper-plane" /> Subscribe</button>
            </form>
          )}
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginTop: '0.75rem' }}>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* CTA — solid gold */}
      <section className="cta-strip">
        <div className="container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join a community of leaders, innovators, and changemakers. Your transformation starts here.</p>
          <div className="cta-strip__btns">
            <button className="btn btn--dark" onClick={() => navigate('contact')}><i className="fas fa-handshake" /> Join Our Community</button>
            <button className="btn btn--outline" style={{ borderColor: 'rgba(10,22,40,0.4)', color: 'var(--ink)' }} onClick={() => navigate('hub')}><i className="fas fa-shopping-bag" /> Shop Our Products</button>
          </div>
        </div>
      </section>

      {selectedBook && <PaymentModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
}
