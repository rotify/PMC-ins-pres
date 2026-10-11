import { useState, useRef, useEffect } from 'react';
import '../styles/CollectiveHub.css';
import { SectionHeader, PaymentModal } from '../components/Shared';
import SeriesSection from '../components/Series';
import { HUB_CATEGORIES, HUB_PRODUCTS, CONTACT_INFO } from '../data/siteData';

const SECTION_IDS = {
  books:      'hub-books',
  patma:      'hub-patma',
  mentorship: 'hub-mentorship',
  sessions:   'hub-sessions',
  community:  'hub-community',
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 140;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function HubCard({ product, onBuy, delay }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isService = ['mentorship', 'sessions', 'community'].includes(product.category);
  const catIcon   = HUB_CATEGORIES.find(c => c.id === product.category)?.icon || 'fas fa-star';

  return (
    <div ref={ref} className={`hub-card${isService ? ' hub-card--service' : ''}${vis ? ' hub-card--visible' : ''}`} style={{ animationDelay: `${delay}s` }}>
      <div className="hub-card__img">
        {product.image ? <img src={product.image} alt={product.title} loading="lazy" /> : <div className="hub-card__service-icon"><i className={catIcon} /></div>}
        {product.badge && <span className="hub-card__badge">{product.badge}</span>}
      </div>
      <div className="hub-card__body">
        <h3 className="hub-card__title">{product.title}</h3>
        <p className="hub-card__desc">{product.description}</p>
        {(product.duration || product.format) && (
          <div className="hub-card__meta">
            {product.duration && <span className="hub-card__meta-item"><i className="fas fa-clock" />{product.duration}</span>}
            {product.format && <span className="hub-card__meta-item"><i className="fas fa-video" />{product.format}</span>}
          </div>
        )}
        <div className="hub-card__footer">
          <div className="hub-card__pricing">
            {product.oldPrice && <span className="hub-card__old">&#8358;{product.oldPrice.toLocaleString()}</span>}
            {product.price ? <span className="hub-card__price">&#8358;{product.price.toLocaleString()}</span> : <span className="hub-card__price-custom">Contact for Pricing</span>}
          </div>
          <button className="btn btn--primary" style={{ fontSize: '0.82rem', padding: '0.6rem 1.1rem' }} onClick={() => onBuy(product)}>
            {product.category === 'community' ? <><i className="fas fa-envelope" /> Enquire</> : isService ? <><i className="fas fa-calendar-check" /> Book</> : <><i className="fas fa-shopping-cart" /> Buy</>}
          </button>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category, products, onBuy, alt }) {
  if (!products.length) return null;
  const sectionId = SECTION_IDS[category.id] || `hub-${category.id}`;

  const TITLES = {
    books: 'Books and Publications', patma: 'Patma Products', mentorship: 'Mentorship Programmes',
    sessions: '1-on-1 Sessions', community: 'Community Projects',
  };
  const DESCS = {
    books:      "Inspiring reads for personal growth, children's literature, and practical wisdom.",
    patma:      'Handcrafted natural skincare and wellness products made with premium African ingredients.',
    mentorship: 'Structured group programmes designed to accelerate your growth alongside a community of driven individuals.',
    sessions:   'Focused, personalised time with Tricia to tackle your specific challenges, goals, and breakthrough moments.',
    community:  "Bespoke social impact and engagement projects built around your organisation's unique vision.",
  };

  return (
    <section className={`section hub-section${alt ? ' hub-section--alt' : ''}`} id={sectionId}>
      <div className="container">
        <SectionHeader tag={category.label} title={TITLES[category.id] || category.label} desc={DESCS[category.id]} />
        <div className="hub-grid">
          {products.map((p, i) => <HubCard key={p.id} product={p} onBuy={onBuy} delay={i * 0.09} />)}
        </div>
      </div>
    </section>
  );
}

const PAYMENT_OPTIONS = [
  { icon: 'fas fa-credit-card', title: 'Pay with Paystack', text: 'Card, bank, USSD, or transfer via Paystack. Instant and secure.' },
  { icon: 'fas fa-university',  title: 'Bank Transfer',     text: 'Optimus Bank, PMC Collective, Account: 2002174994' },
  { icon: 'fab fa-whatsapp',    title: 'WhatsApp Order', text: 'Message us on WhatsApp and we will guide you through the process step by step.' },
];

export default function CollectiveHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [selectedItem, setSelectedItem]     = useState(null);
  const [orderForm, setOrderForm]           = useState({ name: '', email: '', phone: '', product: '', delivery: '', notes: '' });
  const [orderStatus, setOrderStatus]       = useState('idle');

  const productsByCategory = HUB_CATEGORIES.filter(c => c.id !== 'all').map(cat => ({
    category: cat,
    products: HUB_PRODUCTS.filter(p => p.category === cat.id),
  }));

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setDropdownOpen(false);
    if (catId === 'all') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const id = SECTION_IDS[catId];
    if (id) scrollToSection(id);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    fetch(`https://formspree.io/f/${CONTACT_INFO.formspreeId}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: orderForm.name,
        email: orderForm.email,
        phone: orderForm.phone,
        product: orderForm.product,
        delivery: orderForm.delivery,
        notes: orderForm.notes,
        _subject: `New order from ${orderForm.name} - PMC Collective`,
      }),
    }).catch(() => {});
    setOrderStatus('success');
  };
  const resetOrder = () => { setOrderStatus('idle'); setOrderForm({ name: '', email: '', phone: '', product: '', delivery: '', notes: '' }); };

  return (
    <div className="page" style={{ paddingTop: 0 }}>

      <section className="hub-hero">
        <div className="container">
          <div className="hub-hero__inner">
            <span className="hub-hero__tag"><i className="fas fa-store" /> The Collective Hub</span>
            <h1>Everything You Need to <em>Grow</em></h1>
            <p>One destination for books, handcrafted products, mentorship programmes, and personalised sessions designed to accelerate your journey.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn--primary" onClick={() => scrollToSection('hub-books')}><i className="fas fa-book" /> Browse Books</button>
              <button className="btn btn--outline" onClick={() => scrollToSection('hub-sessions')}><i className="fas fa-calendar-check" /> Book a Session</button>
            </div>
          </div>
        </div>
      </section>

      <nav className="hub-nav">
        <div className="hub-nav__inner">
          <div className="hub-nav__dropdown-wrap">
            <button className={`hub-nav__btn${activeCategory === 'all' ? ' active' : ''}`} onClick={() => setDropdownOpen(prev => !prev)}>
              <i className="fas fa-th" /> All Products <i className="fas fa-chevron-down" style={{ fontSize: '0.6rem', marginLeft: '0.2rem' }} />
            </button>
            <div className={`hub-nav__dropdown${dropdownOpen ? ' open' : ''}`}>
              {HUB_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <button key={cat.id} className={`hub-nav__drop-item${activeCategory === cat.id ? ' active' : ''}`} onClick={() => handleCategoryClick(cat.id)}>
                  <i className={cat.icon} /> {cat.label}
                </button>
              ))}
            </div>
          </div>
          {HUB_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
            <button key={cat.id} className={`hub-nav__btn${activeCategory === cat.id ? ' active' : ''}`} onClick={() => handleCategoryClick(cat.id)}>
              <i className={cat.icon} /> {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {productsByCategory.map(({ category, products }, i) => (
        <CategorySection key={category.id} category={category} products={products} onBuy={setSelectedItem} alt={i % 2 !== 0} />
      ))}

      {/* GROWING GREAT KIDS SERIES */}
      <SeriesSection />

      <section className="section payment-options-section" id="hub-payment">
        <div className="container">
          <SectionHeader tag="Flexible Payments" title="Payment Options" desc="We have made paying as easy as possible. Choose what works best for you." />
          <div className="payment-grid">
            {PAYMENT_OPTIONS.map((p) => (
              <div className="payment-card" key={p.title}>
                <div className="payment-card__icon"><i className={p.icon} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            After payment, send proof to <strong>triciacares2020@gmail.com</strong> with your name and order details.
          </p>
        </div>
      </section>

      <section className="section order-section" id="order">
        <div className="container">
          <SectionHeader tag="Ready to Order?" title="Place Your Order" desc="Fill in the form below and we will confirm your order within 24 hours." />
          <div className="order-form-wrap">
            <div className="order-form-wrap__header"><h2>Order Form</h2><p>We will contact you to confirm details and arrange delivery or access.</p></div>

            {orderStatus === 'success' ? (
              <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem' }}><i className="fas fa-check-circle" /></div>
                <h3 style={{ color: 'var(--ink)', marginBottom: '0.5rem' }}>Order Received!</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Thank you, <strong>{orderForm.name}</strong>! We have received your order and will be in touch within 24 hours to confirm details and arrange payment.</p>
                <button className="btn btn--primary" style={{ marginTop: '1.5rem' }} onClick={resetOrder}>Place Another Order</button>
              </div>
            ) : (
              <form className="order-form" onSubmit={handleOrderSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" placeholder="Your full name" required value={orderForm.name} onChange={e => setOrderForm(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" placeholder="your@email.com" required value={orderForm.email} onChange={e => setOrderForm(p => ({ ...p, email: e.target.value }))} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" type="tel" placeholder="+234 ..." required value={orderForm.phone} onChange={e => setOrderForm(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Product or Service *</label>
                    <select className="form-select" required value={orderForm.product} onChange={e => setOrderForm(p => ({ ...p, product: e.target.value }))}>
                      <option value="" disabled>Select what you would like</option>
                      {HUB_PRODUCTS.map(p => <option key={p.id} value={p.title}>{p.title}{p.price ? ` - \u20A6${p.price.toLocaleString()}` : ''}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Delivery Address (for physical items)</label>
                  <input className="form-input" type="text" placeholder="Street, city, state" value={orderForm.delivery} onChange={e => setOrderForm(p => ({ ...p, delivery: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-textarea" placeholder="Any special requests, questions, or details..." style={{ minHeight: '100px' }} value={orderForm.notes} onChange={e => setOrderForm(p => ({ ...p, notes: e.target.value }))} />
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem' }}><i className="fas fa-paper-plane" /> Submit Order</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {selectedItem && <PaymentModal book={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
