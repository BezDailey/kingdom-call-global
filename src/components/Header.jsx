import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HamburgerMenuIcon} from '@radix-ui/react-icons';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className='hidden md:flex flex-col w-full bg-light py-2 lg:px-12 lg:flex-row lg:justify-between xl:px-16 2xl:px-24'>
        <div className='text-center m-auto mb-2 lg:mb-0 lg:mr-auto lg:ml-2'>
          <h1 className='font-heading text-3xl lg:text-xl'>KINGDOM CALL GLOBAL INC.</h1>
        </div>
        <div className="flex text-sm flex-row justify-center gap-4 font-body lg:my-auto lg:text-xs lg:gap-2">
          <Link className="hover:text-primary" to="/">Home</Link>
          <Link className="hover:text-primary" to='/about'>About</Link>
          <Link className="text-gray-400 cursor-not-allowed">Events</Link>
          <Link className="text-gray-400 cursor-not-allowed">Past Events</Link>
          <Link className="text-gray-400 cursor-not-allowed">Partnerships</Link>
          <Link className="text-gray-400 cursor-not-allowed">Ministries</Link>
          <Link className="text-gray-400 cursor-not-allowed">Contact</Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className='md:hidden flex items-center justify-between w-full bg-light py-2 px-4'>
        <h1 className="font-heading text-xl">KCG Inc.</h1>
        <button onClick={toggleMobileMenu} aria-label="Toggle naviation">
          <HamburgerMenuIcon className='w-6 h-6' />
        </button>
      </header>

      {/* Mobile Naviation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col bg-light py-2 px-4 text-sm font-body">
          <Link className="py-1 hover:text-primary" to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link className="py-1 hover:text-primary" to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link className="py-1 text-gray-400 cursor-not-allowed" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link className="py-1 text-gray-400 cursor-not-allowed" onClick={() => setMobileMenuOpen(false)}>Past Events</Link>
          <Link className="py-1 text-gray-400 cursor-not-allowed" onClick={() => setMobileMenuOpen(false)}>Partnerships</Link>
          <Link className="py-1 text-gray-400 cursor-not-allowed" onClick={() => setMobileMenuOpen(false)}>Ministries</Link>
          <Link className="py-1 text-gray-400 cursor-not-allowed" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </>
  );
};

export default Header;
