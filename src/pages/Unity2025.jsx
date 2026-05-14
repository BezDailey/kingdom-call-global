import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

// Importing images for Unity Festival
import unityFestival from '../../public/unity-poster.jpeg';
import unityFestival2 from '../../public/unity-festival-2.jpg';
import unityFestival3 from '../../public/unity-festival-3.jpg';

const Unity2025 = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <section className="kc-bg-navy px-2 mx-auto flex flex-col gap-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          {/* Badge + Headline */}
          <div className="flex justify-center mb-2">
            <span className="kc-badge">2nd Annual</span>
          </div>
          <h1 className="kc-display kc-display--white text-center pb-6">
            Unity Festival
          </h1>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <img
              src={unityFestival}
              alt="Unity Festival"
              className="w-full mb-4 rounded"
            />
            <img
              src={unityFestival2}
              alt="Unity Festival 2"
              className="w-full mb-4 rounded"
            />
            <img
              src={unityFestival3}
              alt="Unity Festival 3"
              className="w-full mb-4 rounded"
            />
          </div>

          {/* Event Strip */}
          <div className="kc-event-strip mt-4 max-w-2xl mx-auto w-full">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Unity2025;
