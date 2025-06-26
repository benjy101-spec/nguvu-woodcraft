import { Menu, X, Search, User, ShoppingBag, MapPin, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Furniture', href: '#furniture' },
    { name: 'Collections', href: '#collections' },
    { name: 'Outdoor Living', href: '#outdoor-living' },
    { name: 'Garden', href: '#garden' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-stone-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Visit our showrooms in Lusaka</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>1-800-OUTDOOR</span>
            </div>
            <span>Free shipping on orders over $2,000</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-stone-800">
              Nguvu Woodcraft
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-stone-700 hover:text-stone-900 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-200">
              <Search className="w-5 h-5 text-stone-700" />
            </button>
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-200">
              <User className="w-5 h-5 text-stone-700" />
            </button>
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-200 relative">
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-700" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-stone-700 hover:text-stone-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;