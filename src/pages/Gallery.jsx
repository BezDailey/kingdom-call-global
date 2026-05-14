import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/gallery/index.json')
      .then((res) => res.json())
      .then((data) => setImageUrls(data));
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + imageUrls.length) % imageUrls.length);
  const next = () => setCurrent((c) => (c + 1) % imageUrls.length);

  // Keyboard navigation
  useEffect(() => {
    if (imageUrls.length === 0) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft')
        setCurrent((c) => (c - 1 + imageUrls.length) % imageUrls.length);
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % imageUrls.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [imageUrls.length]);

  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <section className="kc-bg-light flex flex-col py-12 lg:py-16 px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h1 className="kc-display pb-6 text-center">Our Gallery</h1>

          {imageUrls.length === 0 ? (
            <p className="kc-body text-center">Loading&hellip;</p>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {/* Carousel */}
              <div className="relative w-full">
                {/* Counter */}
                <div
                  className="absolute top-3 right-3 z-10 kc-badge"
                  style={{ pointerEvents: 'none' }}
                >
                  {current + 1} / {imageUrls.length}
                </div>

                {/* Image */}
                <div
                  className="flex items-center justify-center w-full"
                  style={{
                    height: '70vh',
                    maxHeight: '700px',
                    background: 'var(--kc-navy-dark)',
                  }}
                >
                  <img
                    key={current}
                    src={imageUrls[current]}
                    alt={`Photo ${current + 1} of ${imageUrls.length}`}
                    className="max-h-full max-w-full fade-in"
                  />
                </div>

                {/* Prev button */}
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-100 opacity-70"
                  style={{
                    background: 'rgba(13,27,92,0.65)',
                    border: 'var(--kc-border-gold)',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-5 h-5"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Next button */}
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-100 opacity-70"
                  style={{
                    background: 'rgba(13,27,92,0.65)',
                    border: 'var(--kc-border-gold)',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-5 h-5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Keyboard hint */}
              <p className="kc-label" style={{ color: 'var(--kc-text-muted)' }}>
                Use arrow keys to navigate
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
