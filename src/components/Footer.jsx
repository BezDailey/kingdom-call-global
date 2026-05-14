import React from 'react';

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="kc-bg-navy w-full flex flex-col items-center px-2 py-5 text-center">
      <h1 className="kc-script pb-1">
        Go therefore and make disciples of all nations
      </h1>
      <p
        className="kc-body text-sm pb-4"
        style={{ color: 'rgba(255,255,255,0.65)' }}
      >
        Matthew 28:19
      </p>

      {/* Social Links */}
      <div className="flex gap-4 pb-4">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="transition-opacity hover:opacity-100 opacity-60"
            style={{ color: 'var(--kc-gold-light)' }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p
        className="kc-tagline kc-tagline--white"
        style={{
          borderTop: '1px solid rgba(200,152,26,0.3)',
          paddingTop: '12px',
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Kingdom Call Global &mdash;
        All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
