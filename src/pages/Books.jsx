import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import '../styles/Books.css';
import { SectionHeader, PaymentModal } from '../components/Shared';
import { BOOKS } from '../data/siteData';

export default function Books() {
  const { navigate } = useNavigation();
  const [selectedBook, setSelectedBook] = useState(null);
  const [inView, setInView] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page">

      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <span className="page-hero__tag"><i className="fas fa-book" /> Our Publications</span>
            <h1 className="page-hero__title">Books That <em>Inspire</em> & Transform</h1>
            <p className="page-hero__desc">Discover our collection of inspiring books written to empower, uplift, and transform lives through compelling stories and practical guidance.</p>
            <div className="page-hero__cta">
              <button className="btn btn--primary" onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}><i className="fas fa-book-open" /> View Books</button>
              <button className="btn btn--outline" onClick={() => navigate('hub')}><i className="fas fa-shopping-cart" /> Order Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="books">
        <div className="container">
          <SectionHeader tag="Tricia Chris-Omon" title="Our Book Collection" desc="Inspiring books for personal growth, children's literature, and practical wisdom." />
          <div className="books-grid" ref={gridRef}>
            {BOOKS.map((book, i) => (
              <div key={book.id} className={`book-card ${inView ? 'book-card--visible' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="book-card__cover">
                  <img src={book.image} alt={book.title} loading="lazy" />
                  {book.badge && <span className="book-card__badge">{book.badge}</span>}
                </div>
                <div className="book-card__body">
                  <h3 className="book-card__title">{book.title}</h3>
                  <p className="book-card__author">By {book.author}</p>
                  <p className="book-card__desc">{book.description}</p>
                  <div className="book-card__rating">
                    <div className="book-card__stars">
                      {Array.from({ length: Math.floor(book.rating) }).map((_, idx) => <i className="fas fa-star" key={idx} />)}
                      {book.rating % 1 !== 0 && <i className="fas fa-star-half-alt" />}
                    </div>
                    <span className="book-card__rating-val">{book.rating}/5.0</span>
                  </div>
                  <div className="book-card__tags">{book.tags.map((t) => <span className="book-card__tag" key={t}>{t}</span>)}</div>
                  <div className="book-card__footer">
                    <div className="book-card__pricing">
                      {book.oldPrice && <span className="book-card__old">&#8358;{book.oldPrice.toLocaleString()}</span>}
                      <span className="book-card__price">{book.price.toLocaleString()}</span>
                    </div>
                    <button className="btn btn--primary" onClick={() => setSelectedBook(book)}><i className="fas fa-shopping-cart" /> Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="books-cta">
        <div className="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>Get your copies today and start your journey to personal growth and lasting impact.</p>
          <button className="btn btn--primary" onClick={() => navigate('hub')}><i className="fas fa-shopping-cart" /> Shop All Books</button>
        </div>
      </section>

      {selectedBook && <PaymentModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
}
