import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { companiesData } from '../../utils/data';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className={`logo-shine relative overflow-hidden rounded-lg transition-all duration-300 ${
            scrolled || !isHomePage ? 'bg-primary bg-opacity-10' : 'bg-white bg-opacity-20'
          } p-2`}>
            <img 
              src="/logos/logo.svg" 
              alt="Mentone Group" 
              className="h-10 md:h-12 relative z-10 transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="ml-3">
            <span className={`font-heading font-bold text-xl md:text-2xl transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-primary' : 'text-white'
            }`}>
              Mentone
            </span>
            <span className={`font-heading font-bold text-xl md:text-2xl ml-2 transition-colors duration-300 ${
              scrolled || !isHomePage ? 'text-secondary' : 'text-white'
            }`}>
              Group
            </span>
            <div className={`h-1 w-0 group-hover:w-full transition-all duration-300 ease-in-out rounded-full ${
              scrolled || !isHomePage ? 'bg-secondary' : 'bg-white'
            }`}></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            active={location.pathname === '/'}
            scrolled={scrolled}
            isHomePage={isHomePage}
          >
            Home
          </NavLink>
          
          {/* Companies dropdown */}
         <div className="relative group">
  <Link 
    to="/discoverourcompany"
    className={`font-medium transition-colors duration-300 flex items-center ${
      location.pathname.includes('/discoverourcompany')
        ? 'text-secondary'
        : scrolled || !isHomePage
        ? 'text-dark hover:text-primary'
        : 'text-white hover:text-secondary'
    }`}
  >
    Our Companies
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </Link>

  <div className="absolute left-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="glass-effect bg-white rounded-lg shadow-xl p-3 border border-gray-100 backdrop-blur bg-opacity-95">
      <div className="grid grid-cols-1 gap-1 max-h-64 overflow-hidden">
        {companiesData.map(company => (
          <Link
            key={company.id}
            to={`/company/${company.id}`}
            className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-opacity-10 rounded-md transition-all duration-200 flex items-center"
          >
            {company.logo && (
              <img src={company.logo} alt={company.name} className="w-6 h-6 mr-2" />
            )}
            <span>{company.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

          
          <NavLink 
            to="/about" 
            active={location.pathname === '/about'}
            scrolled={scrolled}
            isHomePage={isHomePage}
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/contact" 
            active={location.pathname === '/contact'}
            scrolled={scrolled}
            isHomePage={isHomePage}
          >
            Contact
          </NavLink>
          
          {/* <Link
            to="/contact"
            className="ml-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-20 p-2 rounded-md"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-black" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-black" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation - Compact Box */}
        <div
          className={`absolute top-full right-0 mt-2 mr-4 shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform origin-top-right lg:hidden ${
            isMenuOpen 
              ? 'scale-100 opacity-100' 
              : 'scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 w-64 py-2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="font-medium text-gray-800 dark:text-white">Menu</span>
              <button 
                onClick={toggleMenu}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col">
              <Link
                to="/"
                className="px-4 py-3 text-gray-800 dark:text-white hover:bg-primary hover:bg-opacity-10 flex items-center"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              
              {/* Mobile Companies Section */}
              <div className="px-4 py-3 text-gray-800 dark:text-white hover:bg-primary hover:bg-opacity-10">
                <details className="w-full">
                  <summary className="flex items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Our Companies
                  </summary>
                  <div className="mt-2 pl-7 border-l-2 border-primary border-opacity-30">
                    {companiesData.map(company => (
                      <Link
                        key={company.id}
                        to={`/company/${company.id}`}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200 flex items-center"
                        onClick={toggleMenu}
                      >
                        {company.logo && (
                          <img src={company.logo} alt={company.name} className="w-5 h-5 mr-2" />
                        )}
                        <span>{company.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
              
              <Link
                to="/about"
                className="px-4 py-3 text-gray-800 dark:text-white hover:bg-primary hover:bg-opacity-10 flex items-center"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
              
              <Link
                to="/contact"
                className="px-4 py-3 text-gray-800 dark:text-white hover:bg-primary hover:bg-opacity-10 flex items-center"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
              
              {/* <div className="px-4 py-3">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-medium block text-center transition-all duration-300 hover:shadow-lg"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

// Reusable NavLink component for desktop navigation
const NavLink = ({ to, children, active, scrolled, isHomePage }) => {
  return (
    <Link
      to={to}
      className={`nav-item font-medium transition-all duration-300 relative group ${
        active
          ? 'text-secondary'
          : scrolled || !isHomePage
          ? 'text-dark hover:text-primary'
          : 'text-white hover:text-secondary'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-full ${
        active ? 'w-full' : 'w-0'
      } ${
        active 
          ? 'bg-secondary' 
          : scrolled || !isHomePage
          ? 'bg-primary'
          : 'bg-white'
      }`}></span>
    </Link>
  );
};

export default Header;