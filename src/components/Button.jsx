import React from 'react';

const variantMap = {
  primary: 'kc-btn--primary',
  secondary: 'kc-btn--outline',
  outline: 'kc-btn--outline',
  'outline-white': 'kc-btn--outline-white',
  accent: 'kc-btn--gold',
  gold: 'kc-btn--gold',
};

const Button = ({ type, children, ...props }) => {
  const variantClass = variantMap[type] || 'kc-btn--primary';

  return (
    <button className={`kc-btn ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
