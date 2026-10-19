import { useState, useEffect, MouseEvent } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenus = () => {
    setIsOpen(false);
  };

  const { pathname } = useLocation();

  // Logo click: always land on the home page hero (top).
  // On another page, let React Router navigate (the route transition scrolls to top).
  // Already on home: smoothly scroll back to the hero.
  const handleLogoClick = (e: MouseEvent) => {
    closeMenus();
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10" onClick={handleLogoClick}>
          <Logo color={scrolled || isOpen ? 'dark' : 'light'} linked={false} />
          <span className={`ml-2 text-2xl font-bold ${scrolled || isOpen ? "text-black" : "text-white"}`}>
            CYNOT
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            About
          </NavLink>

          <NavLink 
            to="/services"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Services
          </NavLink>

          {/* Businesses Dropdown */}
          <NavLink 
            to="/technologies"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Technologies
          </NavLink>
          
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Portfolio
          </NavLink>
          
          <NavLink 
            to="/contact"
            className={({ isActive }) => `
              text-sm font-medium transition-colors duration-200
              ${scrolled 
                ? isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                : isActive ? 'text-primary-300' : 'text-white hover:text-primary-300'
              }
            `}
          >
            Contact
          </NavLink>
        </nav>
        
        {/* CTA Button */}
        <Link
          to="/contact"
          className={`
            hidden lg:flex btn font-bold ${scrolled ? 'btn-primary' : 'bg-white text-primary-700 hover:bg-primary-50'}
          `}
          onClick={closeMenus}
        >
          Let's Talk
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-neutral-800' : 'text-black'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-neutral-800' : 'text-white'}`} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            lg:hidden
          `}
        >
          <div className="flex flex-col h-full">
            <div className="mt-24 px-6 space-y-6 pb-6">
              <NavLink
                to="/"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Home
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                About
              </NavLink>
              
              <NavLink
                to="/services"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Services
              </NavLink>
              
              {/* Services Accordion */}
              <NavLink
                to="/technologies"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Technologies
              </NavLink>
              
              <NavLink
                to="/portfolio"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Portfolio
              </NavLink>
              
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  block text-lg font-medium p-3 rounded-md
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-neutral-800 hover:bg-neutral-100'}
                `}
                onClick={closeMenus}
              >
                Contact
              </NavLink>
              
              <Link
                to="/contact"
                className="btn btn-primary w-full mt-6 py-3"
                onClick={closeMenus}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;