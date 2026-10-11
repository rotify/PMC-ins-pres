import { useState } from 'react';
import '../styles/Contact.css';
import { SectionHeader } from '../components/Shared';
import { SOCIAL_LINKS, CONTACT_INFO } from '../data/siteData';

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus]       = useState('idle');
  const [sending, setSending]     = useState(false);
  const [savedName, setSavedName] = useState('');

  const handleChange = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
    const submitterName = form.name;

    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT_INFO.formspreeId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _subject: `New message from ${form.name} - PMC Collective`,
        }),
      });

      if (res.ok) {
        setSavedName(submitterName);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page">

      <section className="contact-hero">
        <div className="contact-hero__inner">
          <h1>Get In Touch</h1>
          <div className="divider" style={{ margin: '1rem auto' }} />
          <p>We would love to hear from you. Reach out for programmes, partnerships, speaking engagements, or just to say hello.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info-card">
              <div className="contact-info-card__header"><h2>Contact Information</h2><p>We are here and we are listening</p></div>
              <div className="contact-info-card__body">
                {[
                  { icon: 'fas fa-map-marker-alt', label: 'Our Address',    content: CONTACT_INFO.address },
                  { icon: 'fas fa-envelope',        label: 'Email Us',       content: CONTACT_INFO.email,  href: `mailto:${CONTACT_INFO.email}` },
                  { icon: 'fas fa-phone',           label: 'Call Us',        content: CONTACT_INFO.phone,  href: `tel:${CONTACT_INFO.phone}` },
                  { icon: 'fas fa-headset',         label: 'Quick Response', content: 'We typically respond within 24 hours' },
                ].map((m) => (
                  <div className="contact-method" key={m.label}>
                    <div className="contact-method__icon"><i className={m.icon} /></div>
                    <div>
                      <h4>{m.label}</h4>
                      {m.href ? <p><a href={m.href}>{m.content}</a></p> : <p>{m.content}</p>}
                    </div>
                  </div>
                ))}
                <div className="contact-hours">
                  <h4><i className="fas fa-clock" /> Working Hours</h4>
                  <p>Monday to Friday: 9:00 AM to 5:00 PM</p>
                  <p>Saturday: 10:00 AM to 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="contact-whatsapp">
                  <i className="fab fa-whatsapp" /> Join Our WhatsApp Community
                  <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem', marginLeft: 'auto', opacity: 0.7 }} />
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-card__header"><h2>Send Us a Message</h2><p>Fill in the form below and we will get back to you as soon as possible.</p></div>

              {status === 'success' ? (
                <div style={{ padding: '2rem' }}>
                  <div className="form-success">
                    <i className="fas fa-check-circle" />
                    <strong>Message sent!</strong>
                    <p style={{ fontWeight: 400, marginTop: '0.5rem', fontSize: '0.9rem' }}>
                      Thank you, {savedName || 'friend'}! We have received your message and we will be in touch within 24 hours.
                    </p>
                    <button className="btn btn--primary" style={{ marginTop: '1.2rem' }} onClick={() => setStatus('idle')}>Send Another Message</button>
                  </div>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" type="text" placeholder="Enter your full name" required value={form.name} onChange={e => handleChange('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={e => handleChange('email', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" type="tel" placeholder="+234 ..." value={form.phone} onChange={e => handleChange('phone', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select className="form-select" required value={form.subject} onChange={e => handleChange('subject', e.target.value)}>
                        <option value="" disabled>What can we help with?</option>
                        <option>General Inquiry</option>
                        <option>Partnership Opportunity</option>
                        <option>Training and Programmes</option>
                        <option>Book Purchase</option>
                        <option>Speaking Engagement</option>
                        <option>Mentorship Request</option>
                        <option>1-on-1 Session</option>
                        <option>Feedback and Suggestions</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea className="form-textarea" placeholder="Please share your thoughts, questions, or enquiries here..." required value={form.message} onChange={e => handleChange('message', e.target.value)} />
                  </div>
                  {status === 'error' && <div className="form-error"><i className="fas fa-exclamation-circle" /> Something went wrong. Please try again.</div>}
                  <button type="submit" className="submit-btn" disabled={sending}>
                    {sending ? <><i className="fas fa-spinner fa-spin" /> Sending...</> : <><i className="fas fa-paper-plane" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <SectionHeader tag="Find Us" title="Our Location" />
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621030318223!2d3.578345315769932!3d6.441980895338324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf752b6e6a7a9%3A0x7e3f1a3f5f7e3f1a!2sSeaside%20Estate%2C%20Ajah%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PMC Collective Location"
            />
          </div>
        </div>
      </section>

      <section className="social-connect">
        <div className="container">
          <h2>Connect With Us</h2>
          <p>Stay updated with our latest programmes, inspirational content, and community events by following us on social media.</p>
          <div className="social-icons">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-icon" aria-label={s.label}><i className={s.icon} /></a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
