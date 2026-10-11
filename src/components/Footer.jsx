import { useNavigation } from '../context/NavigationContext';
import { SOCIAL_LINKS, CONTACT_INFO } from '../data/siteData';
import '../styles/Footer.css';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Vision', id: 'vision' },
  { label: 'Mission', id: 'mission' },
  { label: 'The Hub', id: 'hub' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
];

const bookLinks = [
  { label: 'Magical Tales of Happy Tots', id: 'books' },
  { label: 'The Uplift Kit', id: 'books' },
  { label: 'The Golden Seeds', id: 'books' },
  { label: 'Patma Products', id: 'hub' },
];

export default function Footer() {
  const { navigate } = useNavigation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          <div>
            <div className="footer__brand-logo">
              <img src="/pmc2-logo.jpg" alt="PMC Collective" />
              <span>
                <span className="footer__brand-name">PMC Collective</span>
                <span className="footer__brand-tagline">Lead · Innovate · Inspire</span>
              </span>
            </div>
            <p className="footer__brand-desc">
              Transforming lives through entrepreneurship, leadership, and faith-driven
              purpose since 2020. Building Africa's next generation of leaders.
            </p>
            <div className="footer__social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                   className="footer__social-link" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => navigate(l.id)}>
                    <i className="fas fa-chevron-right" /> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Our Books</h4>
            <ul className="footer__links">
              {bookLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => navigate(l.id)}>
                    <i className="fas fa-book" /> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Get In Touch</h4>
            <div className="footer__contact-item"><i className="fas fa-map-marker-alt" /><span>{CONTACT_INFO.address}</span></div>
            <div className="footer__contact-item"><i className="fas fa-envelope" /><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></div>
            <div className="footer__contact-item"><i className="fas fa-phone" /><a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a></div>
            <div className="footer__contact-item"><i className="fas fa-clock" /><span>{CONTACT_INFO.hours}</span></div>
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">&copy; {year} PMC Collective. All rights reserved.</p>
            <div className="footer__legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
