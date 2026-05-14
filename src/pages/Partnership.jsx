import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const partners = [
  {
    name: 'Elevation Life Church',
    shortName: null,
    altName: null,
    tagline: 'Raising Lives. Inspiring Purpose.',
    pastor: null,
    desc: 'Elevation Life Church is committed to empowering individuals and families to live elevated in faith, walk in purpose, and make a Kingdom impact in every area of life and community.',
    valuePropIcons: null,
  },
  {
    name: 'New Beginnings Fellowship Church',
    shortName: 'NEWB Tampa',
    altName: null,
    tagline: null,
    pastor: 'Dr. James Anthony Jackson, Sr.',
    desc: 'New Beginnings Fellowship Church exists to lead people into a life-changing relationship with Jesus Christ, grow them into mature disciples, and send them to impact our community and the world for His glory.',
    valuePropIcons: null,
  },
  {
    name: 'Firm Foundation Christian Fellowship',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Jamal Quinn',
    desc: 'Firm Foundation Christian Fellowship is built on the Word of God and a heart for people. We exist to help individuals and families grow strong in faith, walk in purpose, and make a Kingdom impact in every area of life and community.',
    valuePropIcons: null,
  },
  {
    name: 'Center for Manifestation',
    shortName: null,
    altName: null,
    tagline: 'Empower. Equip. Activate.',
    pastor: 'Apostle Mark Jones',
    desc: 'Empowering individuals and families to walk in their purpose, discover their gifts, and manifest the Kingdom in every area of life and community.',
    valuePropIcons: null,
  },
  {
    name: 'Iglesia LaVerdad',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Isaac Calle',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'The Crossing Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Greg Dumas',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Truth Center Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Vago Light',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Living In Victory Christian Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Calvin Jefferson',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Manifestations Worldwide',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Apostle Mark Jones',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Love First Christian Center',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Dr. Jomo Cousins',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Zoe International Faith Center',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Pastor Esau Waters',
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Champions Life Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: 'Apostle Deon Douglas',
    desc: null,
    valuePropIcons: null,
  },
];

const Partnership = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="kc-bg-navy px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <p className="kc-tagline kc-tagline--white text-center mb-4">
            Faith. Unity. Community. Purpose.
          </p>
          <h1 className="kc-display kc-display--white text-center pb-4">
            Our Church Partners
          </h1>
          <p
            className="kc-script text-center"
            style={{ color: 'var(--kc-gold-light)' }}
          >
            Uniting Communities. Uplifting the Kingdom.
          </p>
          <p
            className="kc-body text-center mt-4 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Kingdom Call Global is honored to partner with churches and
            ministries across Tampa who share our commitment to faith, unity,
            and transformative community impact.
          </p>
        </section>

        {/* Partner Grid */}
        <section className="kc-bg-white px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-xl mx-auto text-center mb-8">
            <div className="kc-partner-banner mb-4">
              Proud to Highlight Our Partners
            </div>
            <h2 className="kc-display">Church Partners</h2>
            <div className="kc-divider mt-4">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="kc-church-card">
                <div className="kc-church-card__name">{p.name}</div>
                {p.shortName && (
                  <div
                    className="kc-label mb-1"
                    style={{ color: 'var(--kc-text-muted)' }}
                  >
                    {p.shortName}
                  </div>
                )}
                {p.altName && (
                  <div
                    className="kc-label mb-1"
                    style={{ color: 'var(--kc-text-muted)' }}
                  >
                    {p.altName}
                  </div>
                )}
                {p.pastor && (
                  <div className="kc-church-card__pastor">with {p.pastor}</div>
                )}
                {p.tagline && !p.pastor && (
                  <div className="kc-church-card__pastor">{p.tagline}</div>
                )}
                {p.desc && <div className="kc-church-card__desc">{p.desc}</div>}
                {p.valuePropIcons && (
                  <div className="kc-church-card__desc mt-2">
                    {p.valuePropIcons.map((item) => (
                      <div key={item} style={{ marginBottom: '4px' }}>
                        &ndash; {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="kc-bg-navy-dark px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="kc-invite-block max-w-2xl mx-auto">
            <div className="kc-invite-block__title">Become a Partner</div>
            <div className="kc-invite-block__body">
              We are looking for more churches and ministries to partner with!
              Join us in uniting faith, building community, and changing lives
              across Tampa. Together, we can make a lasting Kingdom impact.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                className="kc-btn kc-btn--gold"
                href="mailto:pastortina@kingdomcallglobal.com"
              >
                Partner With Us
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partnership;
