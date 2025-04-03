import React from 'react';

const Button = ({type, children, ...props}) => {
  let className = "px-4 py-2 rounded-lg text-sm ";

  switch (type) {
    case "primary":
      className += "bg-primary text-white hover:bg-accent";
      break;
    case "outline":
      className += "border border-primary hover:bg-primary hover:text-white";
      break;
    case "secondary":
      className += "bg-light hover:bg-primary hover:text-white"
      break;
    default:
      className += "";
      break;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
