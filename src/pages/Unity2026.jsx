import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const valueProps = [
  { emoji: '👥', label: 'Building Stronger Communities' },
  { emoji: '❤️', label: 'Encouraging Faith & Purpose' },
  { emoji: '🤝', label: 'Connecting People & Resources' },
  { emoji: '🎉', label: 'Fun & Activities for All Ages' },
  { emoji: '🙌', label: 'Together, We Make an Impact!' },
];

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
    name: 'La Verdad Tampa',
    shortName: null,
    altName: 'Iglesia La Verdad',
    tagline: null,
    pastor: null,
    desc: null,
    valuePropIcons: [
      'Experience Powerful Worship, Community & Truth',
      'Meet Ministries Making an Impact Across Tampa',
      'Discover Where You Can Call Home',
    ],
  },
  {
    name: 'The Crossing Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: null,
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'Truth Center Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: null,
    desc: null,
    valuePropIcons: null,
  },
  {
    name: 'LIV Christian Church',
    shortName: null,
    altName: null,
    tagline: null,
    pastor: null,
    desc: null,
    valuePropIcons: null,
  },
];

const rehearsals = [
  {
    number: 1,
    date: 'Saturday, May 23, 2026',
    time: '10:30 AM – 12:30 PM',
  },
  {
    number: 2,
    date: 'Saturday, June 6, 2026',
    time: '10:30 AM – 12:30 PM',
  },
];

const whyJoin = [
  'Unite Your Gifts & Talents',
  'Grow in Worship & Purpose',
  'Be a Part of Something Bigger',
  'Make an Eternal Impact',
];

const Unity2026 = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="kc-bg-navy px-2 flex flex-col gap-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="flex justify-center mb-2">
            <span className="kc-badge">2nd Annual</span>
          </div>
          <h1 className="kc-display kc-display--white text-center pb-2">
            Unity Festival
          </h1>
          <p className="kc-tagline kc-tagline--white text-center pb-1">
            Faith. Unity. Community. Purpose.
          </p>
          <p className="kc-script text-center pb-6">
            One Day. One Community. Endless Impact.
          </p>

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
                  <br />
                  <span
                    style={{
                      fontSize: '10px',
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
        </section>

        {/* You're Invited */}
        <section className="kc-bg-navy-dark px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="kc-invite-block max-w-2xl mx-auto">
            <div className="kc-invite-block__title">You&apos;re Invited!</div>
            <div className="kc-invite-block__body">
              Come experience a day of powerful worship, life-changing word,
              inspiring ministries, great food, and fun for the entire family!
            </div>
            <p
              className="kc-label mt-4"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Hosted by Randi J. Norman
            </p>
            <p
              className="kc-script mt-1"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}
            >
              Uniting Faith, Building Community, Changing Lives.
            </p>
          </div>
        </section>

        {/* Value Props */}
        <section className="kc-bg-light px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div
            className="grid grid-cols-3 md:grid-cols-5 gap-4 rounded-lg p-4"
            style={{ border: 'var(--kc-border-gold-pale)' }}
          >
            {valueProps.map((vp) => (
              <div key={vp.label} className="flex flex-col items-center gap-2">
                <div className="kc-icon-grid__circle">{vp.emoji}</div>
                <div className="kc-icon-grid__label">{vp.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Church Partners */}
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

          {/* Church Home CTA */}
          <div className="kc-cta-block mt-10">
            <div className="kc-cta-block__icon">&#9829;</div>
            <div>
              <div className="kc-cta-block__title">
                Looking for a Church Home?
              </div>
              <div className="kc-cta-block__sub">
                If you&apos;re searching for a place to belong, grow, and serve
                &mdash; come to the festival and connect with our ministries.
              </div>
            </div>
          </div>
        </section>

        {/* Performers Callout */}
        <section className="kc-bg-navy-dark px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2
              className="kc-display kc-display--white pb-3"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              Calling All Worship Leaders, Psalmists, Praise Dancers &amp;
              Performers!
            </h2>
            <p className="kc-script pb-2">
              Come be a part of an unforgettable experience at the 2nd Annual
              Kingdom Call Global Unity Festival!
            </p>
            <p className="kc-body" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Join us for two powerful rehearsals as we prepare to lift up the
              name of Jesus together!
            </p>
          </div>

          {/* Rehearsal dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {rehearsals.map((r) => (
              <div key={r.number} className="kc-invite-block text-left">
                <div
                  className="kc-label mb-2"
                  style={{ color: 'var(--kc-gold-light)' }}
                >
                  Rehearsal {r.number}
                </div>
                <div
                  className="kc-body font-bold"
                  style={{ color: 'var(--kc-white)' }}
                >
                  {r.date}
                </div>
                <div
                  className="kc-body"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {r.time}
                </div>
              </div>
            ))}
          </div>

          {/* Rehearsal location */}
          <p
            className="kc-label text-center mb-6"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Springhill Missionary Baptist Church &mdash; 8119 East Dr. MLK Blvd,
            Tampa, FL 33619
          </p>

          {/* Why join */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {whyJoin.map((item) => (
              <div
                key={item}
                className="kc-badge text-center"
                style={{ padding: '8px 12px', whiteSpace: 'normal' }}
              >
                {item}
              </div>
            ))}
          </div>

          <p className="kc-script text-center">
            Let&apos;s Come Together to Praise, Worship, and Build up the
            Kingdom!
          </p>
        </section>

        {/* Partner Recruitment CTA */}
        <section className="kc-bg-light px-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="kc-cta-block max-w-3xl mx-auto">
            <div className="kc-cta-block__icon">&#9733;</div>
            <div className="flex-grow">
              <div className="kc-cta-block__title">
                We are looking for More Churches to Partner With!
              </div>
              <div className="kc-cta-block__sub">
                Join us in uniting faith, building community, and changing lives
                across Tampa.
              </div>
            </div>
            <a
              href="mailto:kingdomcallglobal@gmail.com"
              className="kc-btn kc-btn--gold"
              style={{ flexShrink: 0 }}
            >
              Become a Partner
            </a>
          </div>
        </section>

        {/* We're Better Together */}
        <section className="kc-bg-navy px-2 py-8 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <p className="kc-script text-center">We&apos;re Better Together.</p>
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

export default Unity2026;
