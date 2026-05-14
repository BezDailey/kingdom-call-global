import React from 'react';

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
      <p
        className="kc-tagline"
        style={{
          color: 'rgba(255,255,255,0.45)',
          borderTop: '1px solid rgba(200,152,26,0.3)',
          paddingTop: '12px',
        }}
      >
        Copyright &copy; 2024 Kingdom Call Global &mdash; All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
