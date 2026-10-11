// ============================================================
// src/components/Shared.jsx
// BackToTop, Preloader, SectionHeader, PaymentModal — no gradients
// ============================================================
import { useState, useEffect } from 'react';
import { PAYMENT_CONFIG } from '../data/siteData';

// ── BACK TO TOP ────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999,
        width: '46px', height: '46px', borderRadius: '50%',
        background: 'var(--gold)', color: 'var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', boxShadow: 'var(--shadow-gold)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.35s ease',
        pointerEvents: visible ? 'auto' : 'none',
        cursor: 'pointer', border: 'none',
      }}
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
}

// ── PRELOADER ──────────────────────────────────────────────
export function Preloader({ done }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--ink)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.6s ease, visibility 0.6s ease',
        opacity: done ? 0 : 1,
        visibility: done ? 'hidden' : 'visible',
        pointerEvents: done ? 'none' : 'auto',
      }}
    >
      <img
        src="/pmc2-logo.jpg"
        alt="PMC Collective"
        style={{
          width: 64, height: 64, borderRadius: '50%',
          border: '3px solid var(--gold)', marginBottom: '1.5rem',
          animation: 'floatY 2s ease-in-out infinite',
        }}
      />
      <div
        style={{
          width: 40, height: 40,
          border: '3px solid rgba(201,168,76,0.2)',
          borderTopColor: 'var(--gold)', borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
    </div>
  );
}

// ── SECTION HEADER ─────────────────────────────────────────
export function SectionHeader({ tag, title, desc, light = false }) {
  return (
    <div className="section-header">
      {tag && <span className="section-header__tag">{tag}</span>}
      <h2 className={`section-header__title${light ? ' section-header__title--light' : ''}`}>
        {title}
      </h2>
      <div className="divider" />
      {desc && (
        <p className={`section-header__desc${light ? ' section-header__desc--light' : ''}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

// ── PAYMENT MODAL ──────────────────────────────────────────
export function PaymentModal({ book, onClose }) {
  const [step, setStep]       = useState(1);   // 1 details · 2 method · 3 paystack · 4 transfer · 5 done
  const [form, setForm]       = useState({ name: '', email: '', phone: '', address: '' });
  const [errors, setErrors]   = useState({});
  const [receiptName, setReceiptName] = useState('');
  const [sentVia, setSentVia] = useState('');

  if (!book) return null;

  const { paystackLink, bank, receiptEmail, whatsappNumber } = PAYMENT_CONFIG;

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name  = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Valid email required';
    if (!form.phone.trim())        e.phone = 'Phone number is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setStep(2);
  };

  const handleOverlay = (e) => { if (e.target === e.currentTarget) onClose(); };

  // Build a pre-filled reference so you can match payment to order
  const orderRef = `${book.title} - ${form.name || 'Customer'} - NGN${book.price.toLocaleString()}`;

  // Paystack: open payment page with email + amount + reference prefilled
  const goToPaystack = () => {
    const params = new URLSearchParams({
      email: form.email,
      amount: String(book.price * 100), // Paystack uses kobo
    });
    const url = `${paystackLink}?${params.toString()}`;
    window.open(url, '_blank', 'noopener');
    setStep(3);
  };

  // WhatsApp message with order details (receipt image attached by user in chat)
  const whatsappHref = () => {
    const msg =
      `Hello PMC Collective! I just made a bank transfer for my order.%0A%0A` +
      `*Order:* ${book.title}%0A` +
      `*Amount:* NGN ${book.price.toLocaleString()}%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Phone:* ${form.phone}%0A%0A` +
      `I am attaching my payment receipt here.`;
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  const emailHref = () => {
    const subject = `Payment Receipt - ${book.title}`;
    const body =
      `Hello PMC Collective,%0A%0AI have made a bank transfer for my order. ` +
      `My receipt is attached.%0A%0A` +
      `Order: ${book.title}%0A` +
      `Amount: NGN ${book.price.toLocaleString()}%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A`;
    return `mailto:${receiptEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const FIELDS = [
    { key: 'name',    label: 'Full Name',                   type: 'text',  placeholder: 'Your full name' },
    { key: 'email',   label: 'Email Address',               type: 'email', placeholder: 'your@email.com' },
    { key: 'phone',   label: 'Phone Number',                type: 'tel',   placeholder: '+234 ...' },
    { key: 'address', label: 'Delivery Address (optional)', type: 'text',  placeholder: 'Street, city' },
  ];

  const copy = (text) => { try { navigator.clipboard.writeText(text); } catch (e) { /* no-op */ } };

  return (
    <div
      onClick={handleOverlay}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(10,22,40,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem', animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          background: 'var(--ivory)', borderRadius: 'var(--radius-lg)',
          padding: '2.5rem', maxWidth: 500, width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          animation: 'scaleIn 0.35s ease',
          boxShadow: '0 40px 80px rgba(10,22,40,0.4)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <span className="badge">Order</span>
            <h3 style={{ marginTop: '0.5rem', fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{book.title}</h3>
            <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>&#8358;{book.price.toLocaleString()}</p>
          </div>
          <button onClick={onClose} style={{ fontSize: '1.8rem', color: 'var(--text-muted)', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>&times;</button>
        </div>

        {/* STEP 1 — details */}
        {step === 1 && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FIELDS.map(({ key, label, type, placeholder }) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input className="form-input" type={type} placeholder={placeholder} value={form[key]} onChange={(e) => handleChange(key, e.target.value)} />
                {errors[key] && <span style={{ color: '#c0392b', fontSize: '0.82rem' }}>{errors[key]}</span>}
              </div>
            ))}
            <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
              Continue to Payment <i className="fas fa-arrow-right" />
            </button>
          </form>
        )}

        {/* STEP 2 — choose method */}
        {step === 2 && (
          <div>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Choose how you would like to pay for <strong>{book.title}</strong>:
            </p>

            {/* Paystack — primary */}
            <button
              onClick={goToPaystack}
              style={{
                display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', padding: '1.15rem 1.2rem',
                background: 'var(--gold)', border: 'none', borderRadius: 'var(--radius-md)',
                marginBottom: '0.85rem', cursor: 'pointer', textAlign: 'left', boxShadow: 'var(--shadow-gold)',
              }}
            >
              <i className="fas fa-credit-card" style={{ color: 'var(--ink)', fontSize: '1.4rem', width: 26, flexShrink: 0 }} />
              <span>
                <strong style={{ display: 'block', color: 'var(--ink)', fontSize: '1rem' }}>Pay with Paystack</strong>
                <span style={{ fontSize: '0.82rem', color: 'rgba(10,22,40,0.7)' }}>Card, bank, USSD, transfer &mdash; instant &amp; secure</span>
              </span>
              <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--ink)' }} />
            </button>

            {/* Bank transfer — secondary */}
            <button
              onClick={() => setStep(4)}
              style={{
                display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', padding: '1.15rem 1.2rem',
                background: 'var(--white)', border: '2px solid var(--mist)', borderRadius: 'var(--radius-md)',
                marginBottom: '0.75rem', cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--mist)'; }}
            >
              <i className="fas fa-university" style={{ color: 'var(--blue)', fontSize: '1.4rem', width: 26, flexShrink: 0 }} />
              <span>
                <strong style={{ display: 'block', color: 'var(--ink)', fontSize: '1rem' }}>Bank Transfer</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Transfer manually &amp; upload your receipt</span>
              </span>
              <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
            </button>

            <button onClick={() => setStep(1)} style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              &larr; Back
            </button>
          </div>
        )}

        {/* STEP 3 — Paystack opened */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: 70, height: 70, borderRadius: '50%',
              background: 'rgba(201,162,39,0.12)', border: '2px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem', fontSize: '1.8rem', color: 'var(--gold)',
            }}>
              <i className="fas fa-external-link-alt" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Paystack Opened</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We opened the secure Paystack page in a new tab. Complete your payment of
              <strong> &#8358;{book.price.toLocaleString()}</strong> there. If it did not open, tap below.
            </p>
            <button
              onClick={goToPaystack}
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
            >
              <i className="fas fa-credit-card" /> Open Paystack Again
            </button>
            <button onClick={onClose} className="btn btn--dark" style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
            <button onClick={() => setStep(2)} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}>
              &larr; Choose another method
            </button>
          </div>
        )}

        {/* STEP 4 — bank transfer + receipt */}
        {step === 4 && (
          <div>
            <h4 style={{ color: 'var(--ink)', marginBottom: '0.4rem' }}>Bank Transfer</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
              Transfer <strong>&#8358;{book.price.toLocaleString()}</strong> to the account below, then upload your receipt and send it to us.
            </p>

            {/* Bank details card */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--mist)', borderRadius: 'var(--radius-md)', padding: '1.2rem', marginBottom: '1.2rem' }}>
              {[
                { label: 'Bank', value: bank.bankName },
                { label: 'Account Name', value: bank.accountName },
                { label: 'Account Number', value: bank.accountNumber, copyable: true },
                { label: 'Amount', value: `\u20A6${book.price.toLocaleString()}` },
              ].map((row) => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--mist)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{row.label}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--ink)' }}>
                    {row.value}
                    {row.copyable && (
                      <button onClick={() => copy(row.value)} title="Copy" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: '0.85rem' }}>
                        <i className="fas fa-copy" />
                      </button>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Receipt upload */}
            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem' }}>Upload your receipt (image or PDF)</label>
            <label
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                padding: '1.5rem', border: '2px dashed var(--mist)', borderRadius: 'var(--radius-md)',
                cursor: 'pointer', marginBottom: '1.2rem', textAlign: 'center', transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--mist)'; }}
            >
              <i className="fas fa-cloud-upload-alt" style={{ fontSize: '1.6rem', color: 'var(--gold)' }} />
              <span style={{ fontSize: '0.88rem', color: receiptName ? 'var(--ink)' : 'var(--text-muted)', fontWeight: receiptName ? 700 : 400 }}>
                {receiptName || 'Tap to choose a file'}
              </span>
              <input
                type="file"
                accept="image/*,application/pdf"
                style={{ display: 'none' }}
                onChange={(e) => setReceiptName(e.target.files?.[0]?.name || '')}
              />
            </label>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.8rem', lineHeight: 1.5 }}>
              Now send your receipt to us. Choose one:
            </p>

            {/* Send via WhatsApp / Email */}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setSentVia('whatsapp')}
              style={{
                display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center',
                width: '100%', padding: '0.9rem', background: '#25D366', color: 'var(--white)',
                borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '0.7rem', textDecoration: 'none',
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }} /> Send Receipt via WhatsApp
            </a>
            <a
              href={emailHref()}
              onClick={() => setSentVia('email')}
              style={{
                display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center',
                width: '100%', padding: '0.9rem', background: 'var(--blue)', color: 'var(--white)',
                borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '1rem', textDecoration: 'none',
              }}
            >
              <i className="fas fa-envelope" style={{ fontSize: '1.1rem' }} /> Send Receipt via Email
            </a>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.5 }}>
              Tip: when WhatsApp or your email opens, attach the receipt file you selected above.
            </p>

            {sentVia && (
              <button onClick={() => setStep(5)} className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.5rem' }}>
                I have sent my receipt <i className="fas fa-check" />
              </button>
            )}
            <button onClick={() => setStep(2)} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', display: 'block', margin: '0.5rem auto 0' }}>
              &larr; Choose another method
            </button>
          </div>
        )}

        {/* STEP 5 — transfer done */}
        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: 70, height: 70, borderRadius: '50%',
              background: 'rgba(201,162,39,0.12)', border: '2px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem', fontSize: '1.8rem', color: 'var(--gold)',
            }}>
              <i className="fas fa-check" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', marginBottom: '0.75rem' }}>Receipt Received!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Thank you, <strong>{form.name}</strong>!</p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Once we confirm your transfer, we will contact you at <strong>{form.email}</strong> within 24 hours to arrange delivery.
            </p>
            <button onClick={onClose} className="btn btn--primary" style={{ margin: '0 auto' }}>Done <i className="fas fa-check" /></button>
          </div>
        )}
      </div>
    </div>
  );
}

