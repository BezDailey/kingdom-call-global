import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const contactItems = [
  {
    icon: '📞',
    label: 'Phone',
    value: '(813) 369-9618',
    href: 'tel:8133699618',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'pastortina@kingdomcallglobal.com',
    href: 'mailto:pastortina@kingdomcallglobal.com',
  },
  {
    icon: '📍',
    label: 'Event Location',
    value: 'Tampa Water Works Park\n1701 N. Highland Avenue, Tampa, FL 33602',
    href: null,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      <Header />
      <UnityFestivalBanner />

      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="kc-bg-navy px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <p className="kc-tagline kc-tagline--white text-center mb-4">
            We&apos;d love to hear from you
          </p>
          <h1 className="kc-display kc-display--white text-center pb-4">
            Contact Us
          </h1>
          <p className="kc-script text-center">
            Uniting Faith, Building Community, Changing Lives.
          </p>
        </section>

        {/* Contact Info */}
        <section className="kc-bg-white px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-2xl mx-auto">
            <div className="kc-divider mb-8">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <div key={item.label} className="kc-cta-block">
                  <div
                    className="kc-event-strip__icon"
                    style={{ fontSize: '20px', flexShrink: 0 }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="kc-cta-block__title">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="kc-cta-block__sub"
                        style={{ color: 'var(--kc-navy)', fontWeight: 600 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="kc-cta-block__sub"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="kc-divider mt-8">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="kc-bg-navy-dark px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="kc-invite-block max-w-2xl mx-auto">
            <div className="kc-invite-block__title">Get Involved</div>
            <div className="kc-invite-block__body">
              Whether you&apos;re looking to partner with us, perform at the
              festival, or simply learn more — we&apos;d love to connect. Reach
              out by phone or email and a member of our team will be in touch.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                className="kc-btn kc-btn--gold"
                href="mailto:pastortina@kingdomcallglobal.com"
              >
                Send Us an Email
              </a>
              <a className="kc-btn kc-btn--outline-white" href="tel:8133699618">
                (813) 369-9618
              </a>
            </div>
          </div>
        </section>

        {/* All Welcome Strip */}
        <div className="kc-all-welcome">
          All are welcome! Bring your family, friends, neighbors, and
          co-workers!
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
