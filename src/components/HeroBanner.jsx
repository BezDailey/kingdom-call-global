import React from 'react';

const wordRows = [
  [
    { text: 'unidad', size: 18, bold: false },
    { text: 'undad', size: 22, bold: true },
    { text: 'وطن', size: 18, bold: false },
    { text: 'unity', size: 18, bold: false },
  ],
  [
    { text: 'єкаті', size: 15, bold: false },
    { text: 'わたり', size: 22, bold: false },
    { text: 'Einheit', size: 22, bold: true },
    { text: 'Einheit', size: 22, bold: true },
  ],
  [
    { text: 'unoja', size: 18, bold: false },
    { text: 'umoja', size: 18, bold: false },
    { text: 'Unité', size: 22, bold: true },
  ],
  [
    { text: 'पनाय', size: 15, bold: false },
    { text: 'Unité', size: 18, bold: false },
    { text: 'Unität', size: 22, bold: true },
  ],
];

const HeroBanner = () => {
  return (
    <section className="kc-bg-light w-full">
      {/* Top row: logo + event info */}
      <div
        className="flex items-start justify-between px-6 pt-6 pb-4 md:px-12 lg:px-16 xl:px-24"
        style={{ borderBottom: 'var(--kc-border-gold-pale)' }}
      >
        <img
          src="/logo-transparent.png"
          alt="Kingdom Call Global"
          style={{ height: 'clamp(56px, 7vw, 88px)', width: 'auto' }}
        />
        <div className="text-right">
          <p
            style={{
              fontFamily: 'var(--kc-font-display)',
              fontWeight: 700,
              color: 'var(--kc-navy)',
              fontSize: 'clamp(13px, 1.6vw, 20px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Kingdom Call
            <br />
            Unity Festival
          </p>
          <p className="kc-label mt-1" style={{ color: 'var(--kc-navy)' }}>
            Tampa Water Works Park, Tampa
          </p>
        </div>
      </div>

      {/* Headline */}
      <div className="text-center px-4 pt-6 pb-2">
        <h1
          className="kc-display"
          style={{
            color: 'var(--kc-navy)',
            fontSize: 'clamp(28px, 5vw, 64px)',
          }}
        >
          Unity in Our Community
        </h1>
        <p
          className="kc-tagline mt-3"
          style={{ color: 'var(--kc-navy)', letterSpacing: '0.18em' }}
        >
          One Kingdom.&nbsp;&nbsp;One Call.&nbsp;&nbsp;One Community.
        </p>
      </div>

      {/* Multilingual unity words */}
      <div
        className="text-center px-6 pb-8 md:px-12"
        style={{
          fontFamily: 'var(--kc-font-body)',
          color: 'var(--kc-navy)',
        }}
      >
        {wordRows.map((row, ri) => (
          <div
            key={ri}
            className="flex flex-wrap justify-center mt-1"
            style={{ gap: '0 24px' }}
          >
            {row.map((w, wi) => (
              <span
                key={wi}
                style={{
                  fontSize: w.size,
                  fontWeight: w.bold ? 700 : 400,
                }}
              >
                {w.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
