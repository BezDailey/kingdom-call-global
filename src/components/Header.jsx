import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Unity 2026', path: '/unity2026' },
  { label: 'Partnership', path: '/partnership' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const desktopLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `transition-colors ${
      isActive
        ? 'text-accentdark font-semibold border-b border-accentdark pb-0.5'
        : 'hover:text-accentdark'
    }`;
  };

  const mobileLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `py-1 transition-colors ${
      isActive ? 'text-accentdark font-semibold' : 'hover:text-accentdark'
    }`;
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex flex-col w-full bg-light py-2 lg:px-12 lg:flex-row lg:justify-between xl:px-16 2xl:px-24">
        <div className="text-center m-auto mb-2 lg:mb-0 lg:mr-auto lg:ml-2">
          <h1 className="kc-display text-2xl lg:text-xl">
            Kingdom Call Global Inc.
          </h1>
        </div>
        <div className="flex text-sm flex-row justify-center gap-4 font-body lg:my-auto lg:text-sm lg:gap-6 relative">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={desktopLinkClass(link.path)}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between w-full bg-light py-2 px-4">
        <h1 className="kc-display text-lg">KCG Inc.</h1>
        <button onClick={toggleMobileMenu} aria-label="Toggle navigation">
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col bg-light py-2 px-4 text-sm font-body">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={mobileLinkClass(link.path)}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;
