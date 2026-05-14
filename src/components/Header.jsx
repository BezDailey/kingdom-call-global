import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
          <Link className="hover:text-accentdark transition-colors" to="/">
            Home
          </Link>
          <Link className="hover:text-accentdark transition-colors" to="/about">
            About
          </Link>
          <Link
            className="hover:text-accentdark transition-colors"
            to="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="hover:text-accentdark transition-colors"
            to="/unity2026"
          >
            Unity 2026
          </Link>
          <Link
            className="hover:text-accentdark transition-colors"
            to="/partnership"
          >
            Partnership
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between w-full bg-light py-2 px-4">
        <h1 className="kc-display text-lg">KCG Inc.</h1>
        <button onClick={toggleMobileMenu} aria-label="Toggle naviation">
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Naviation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col bg-light py-2 px-4 text-sm font-body">
          <Link
            className="py-1 hover:text-accentdark transition-colors"
            to="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="py-1 hover:text-accentdark transition-colors"
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="py-1 hover:text-accentdark transition-colors"
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            className="py-1 hover:text-accentdark transition-colors"
            to="/unity2026"
            onClick={() => setMobileMenuOpen(false)}
          >
            Unity 2026
          </Link>
          <Link
            className="py-1 hover:text-accentdark transition-colors"
            to="/partnership"
            onClick={() => setMobileMenuOpen(false)}
          >
            Partnership
          </Link>
        </nav>
      )}
    </>
  );
};

export default Header;
