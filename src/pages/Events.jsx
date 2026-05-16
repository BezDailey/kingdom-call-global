import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityPoster from '../../public/unity-poster.jpeg';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const Events = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 lg:py-16">
        {/* Invite card + poster */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="kc-invite-block flex flex-col gap-4 items-center text-center">
            <span className="kc-badge">2nd Annual</span>
            <div className="kc-invite-block__title">You&apos;re Invited!</div>
            <div className="kc-invite-block__body">
              Come experience a day of powerful worship, life-changing word,
              inspiring ministries, great food, and fun for the entire family!
            </div>
            <a className="kc-btn kc-btn--gold" href="/unity2026">
              Register Now
            </a>
          </div>
          <img src={UnityPoster} className="w-full rounded object-cover" />
        </div>

        {/* Event Strip */}
        <div className="kc-event-strip max-w-5xl mx-auto mt-8">
          <div className="kc-event-strip__cell">
            <div className="kc-event-strip__icon">&#128197;</div>
            <div>
              <div className="kc-event-strip__sublabel">Date</div>
              <div className="kc-event-strip__value">
                Saturday
                <br />
                June 13, 2026
              </div>
            </div>
          </div>
          <div className="kc-event-strip__cell">
            <div className="kc-event-strip__icon">&#128336;</div>
            <div>
              <div className="kc-event-strip__sublabel">Time</div>
              <div className="kc-event-strip__value">
                12:00 PM &ndash; 4:00 PM
              </div>
            </div>
          </div>
          <div className="kc-event-strip__cell">
            <div className="kc-event-strip__icon">&#128205;</div>
            <div>
              <div className="kc-event-strip__sublabel">Location</div>
              <div className="kc-event-strip__value">
                Tampa Water Works Park
                <br />
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    color: 'var(--kc-text-muted)',
                  }}
                >
                  1701 N. Highland Avenue, Tampa, FL 33602
                </span>
              </div>
            </div>
          </div>
          <div className="kc-event-strip__cell">
            <div className="kc-event-strip__icon">&#128222;</div>
            <div>
              <div className="kc-event-strip__sublabel">Contact</div>
              <div className="kc-event-strip__value">(813) 369-9618</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
