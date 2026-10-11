import { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NAV_LINKS } from '../data/siteData';
import '../styles/Navbar.css';

export default function Navbar() {
  const { page, navigate } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    navigate(id);
    setOpen(false);
    setMobileSubOpen(false);
  };

  const isHubActive = page === 'hub' || page === 'books';

  const linkClass = (id, special, forceActive) => {
    let cls = 'navbar__link';
    if (forceActive !== undefined ? forceActive : page === id) cls += ' active';
    if (special === 'hub')     cls += ' navbar__link--hub';
    if (special === 'contact') cls += ' navbar__link--contact';
    return cls;
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleNav('home')}>
          <img src="/pmc2-logo.jpg" alt="PMC Collective" className="navbar__logo-img" />
          <span className="navbar__logo-wrap">
            <span className="navbar__logo-text">PMC Collective</span>
            <span className="navbar__logo-sub">Lead · Innovate · Inspire</span>
          </span>
        </button>

        {/* Desktop menu */}
        <nav className="navbar__menu">
          {NAV_LINKS.map((link) => (
            link.children ? (
              <div className="navbar__dropdown-wrap" key={link.id}>
                <button
                  className={linkClass(link.id, link.special, isHubActive)}
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                  <i className="fas fa-chevron-down navbar__chevron" />
                </button>
                <div className="navbar__dropdown">
                  {link.children.map((child) => (
                    <button
                      key={child.label}
                      className={`navbar__dropdown-item${page === child.id ? ' active' : ''}`}
                      onClick={() => handleNav(child.id)}
                    >
                      <i className={child.icon} /> {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button key={link.id} className={linkClass(link.id, link.special)} onClick={() => handleNav(link.id)}>
                {link.label}
              </button>
            )
          ))}
        </nav>

        <button className={`navbar__toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`navbar__mobile ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          link.children ? (
            <div className="navbar__mobile-group" key={link.id}>
              <button
                className={`navbar__link navbar__mobile-parent${isHubActive ? ' active' : ''}`}
                onClick={() => setMobileSubOpen(v => !v)}
              >
                {link.label}
                <i className={`fas fa-chevron-down navbar__chevron ${mobileSubOpen ? 'rot' : ''}`} />
              </button>
              <div className={`navbar__mobile-sub ${mobileSubOpen ? 'open' : ''}`}>
                {link.children.map((child) => (
                  <button
                    key={child.label}
                    className={`navbar__link navbar__mobile-subitem${page === child.id ? ' active' : ''}`}
                    onClick={() => handleNav(child.id)}
                  >
                    <i className={child.icon} /> {child.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button key={link.id} className={linkClass(link.id, link.special)} onClick={() => handleNav(link.id)}>
              {link.label}
            </button>
          )
        ))}
      </nav>
    </header>
  );
}
