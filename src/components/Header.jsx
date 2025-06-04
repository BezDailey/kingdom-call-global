import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HamburgerMenuIcon} from '@radix-ui/react-icons';

// Example list of partner churches (replace with your actual data)
const partnerChurches = [
  { name: "Manifestations Worldwide", path: "/partnerships/grace-chapel" },
  { name: "Love First Christian Center", path: "/partnerships/faith-assembly" },
  { name: "Firm Foundation", path: "/partnerships/hope-community" },
  { name: "Zoe Internation Faith Center", path: "/partnerships/hope-community" },
  { name: "Iglesia LaVerdad", path: "/partnerships/hope-community" },
  { name: "Elevation Life Center", path: "/partnerships/hope-community" },
  { name: "NOW Church", path: "/partnerships/hope-community" },
  { name: "Allen Temple AME Church", path: "/partnerships/hope-community" },
  { name: "Living in Victory Christian Church", path: "/partnerships/hope-community" },
  { name: "Truth Center Church", path: "/partnerships/hope-community" },
  { name: "Champions Life Church", path: "/partnerships/hope-community" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Desktop dropdown handlers
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); // 1 second delay
    setDropdownTimeout(timeout);
  };

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className='hidden md:flex flex-col w-full bg-light py-2 lg:px-12 lg:flex-row lg:justify-between xl:px-16 2xl:px-24'>
        <div className='text-center m-auto mb-2 lg:mb-0 lg:mr-auto lg:ml-2'>
          <h1 className='font-heading text-3xl lg:text-xl'>KINGDOM CALL GLOBAL INC.</h1>
        </div>
        <div className="flex text-sm flex-row justify-center gap-4 font-body lg:my-auto lg:text-xs lg:gap-2 relative">
          <Link className="hover:text-primary" to="/">Home</Link>
          <Link className="hover:text-primary" to='/about'>About</Link>
          <Link className="hover:text-primary" to='/gallery'>Gallery</Link>
          <Link className="hover:text-primary" to='/unity2025'>Unity 2025</Link>
          {/* Partnership Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              className="hover:text-primary focus:outline-none flex items-center"
              onClick={() => setDropdownOpen((open) => !open)}
              type="button"
            >
              Partnership
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                {partnerChurches.map((church) => (
                  <Link
                    key={church.name}
                    // to={church.path}
                    className="block px-4 py-2 hover:bg-primary hover:text-white"
                    onClick={handleDropdownLinkClick}
                  >
                    {church.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          <Link className="py-1 hover:text-primary" to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link className="py-1 hover:text-primary" to="/unity2025" onClick={() => setMobileMenuOpen(false)}>Unity Festival</Link>
          {/* Partnership Dropdown for Mobile */}
          <details>
            <summary className="py-1 hover:text-primary cursor-pointer">Partnership</summary>
            <div className="pl-4">
              {partnerChurches.map((church) => (
                <Link
                  key={church.name}
                  /*to={church.path}*/
                  className="block py-1 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {church.name}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      )}
    </>
  );
};

export default Header;