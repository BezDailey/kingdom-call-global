import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';
import HeroBanner from '../components/HeroBanner';

// Importing images for the carousel
import home1 from '../../public/home_1.jpg';
import home2 from '../../public/home_2.jpg';
import home4 from '../../public/home_4.jpg';
import home6 from '../../public/home_6.jpg';
import home7 from '../../public/home_7.jpg';
import home8 from '../../public/home_8.jpg';

const carouselImages = [home1, home2, home4, home6, home7, home8];

// Home component

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* Hero */}
        <HeroBanner />

        {/* Mission */}
        <section className="kc-bg-navy px-2 mx-auto py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <p className="kc-tagline kc-tagline--white mb-4">
            Faith. Unity. Community. Purpose.
          </p>
          <h2 className="kc-display kc-display--white pb-4">Mission</h2>
          <p className="kc-body text-white leading-relaxed">
            Our mission is to unite the disciples of Jesus Christ and usher in
            the manifestation of the Kingdom of God. Our goal is simple yet
            profound: to collaborate with spiritual leaders across communities,
            fostering unity and implementing transformative ideas for the
            greater good. Together, we strive to bring about positive change,
            empowering individuals and communities to embody the values of love,
            compassion, and justice. Join us on this inspiring journey towards
            collective growth and the realization of God&apos;s Kingdom on
            Earth.
          </p>
        </section>

        {/* Gallery Carousel */}
        <section className="py-12 lg:py-16">
          {/* Track */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    minWidth: '100%',
                    height: '480px',
                    background: 'var(--kc-navy)',
                  }}
                >
                  <img
                    src={img}
                    alt={`Photo ${i + 1}`}
                    className="max-h-full max-w-full"
                  />
                </div>
              ))}
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

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
                className="w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300"
                style={{
                  background:
                    i === current ? 'var(--kc-gold)' : 'rgba(13,27,92,0.25)',
                  transform: i === current ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
