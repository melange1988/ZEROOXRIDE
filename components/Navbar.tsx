import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className={`text-2xl font-serif font-black tracking-tight ${scrolled ? 'text-brand-black' : 'text-brand-black md:text-white'}`}>
              ZEROOX
            </span>
            <div className={`h-3 w-3 rounded-full ml-1 ${scrolled ? 'bg-brand-orange' : 'bg-brand-orange'} group-hover:scale-110 transition-transform`}></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              Home
            </Link>
            <Link to="/collection/dirt-bike" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              Dirt Bikes
            </Link>
            <Link to="/collection/ride-on" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              Ride On Toys
            </Link>
            <Link to="/about" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              La Vie ZEROOX
            </Link>
            <Link to="/dealer" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              Dealers
            </Link>
            <Link to="/contact" className={`font-medium font-serif tracking-wide hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              <Search className="h-5 w-5" />
            </button>
            <button className={`hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              <User className="h-5 w-5" />
            </button>
            <button className={`relative hover:text-brand-orange transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-orange text-brand-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
             <button className={`${scrolled ? 'text-brand-black' : 'text-brand-black md:text-white'}`}>
               <ShoppingCart className="h-5 w-5" />
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-brand-black' : 'text-brand-black md:text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-brand-gray/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '60px' }}>
        <div className="flex flex-col p-6 space-y-6 h-[calc(100vh-60px)] overflow-y-auto">
          <Link to="/" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">Home</Link>
          <Link to="/collection/dirt-bike" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">Dirt Bikes</Link>
          <Link to="/collection/ride-on" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">Ride On Toys</Link>
          <Link to="/about" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">La Vie ZEROOX</Link>
          <Link to="/dealer" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">Become a Dealer</Link>
          <Link to="/contact" className="text-2xl font-serif font-medium text-brand-black border-b border-brand-orange/20 pb-4">Contact Us</Link>
          <div className="pt-4 flex items-center space-x-2 text-gray-600">
             <User className="h-5 w-5" />
             <span>Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
};