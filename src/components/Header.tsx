import React, { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#header' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Products', href: '/products' },
    {
      name: 'About Us',
      href: '/#about',
      submenu: [
        { name: 'Our Story', href: '/story' },
        { name: 'Our Services', href: '/services' }
      ]
    },
    { name: 'Contact', href: '/contacts' },
  ];

  // Helper function to check if a nav item or submenu item is active
  const isActive = (href: string): boolean => {
    // Special case for Home link with hash
    if (href === '/#header' && location.pathname === '/') {
      return true;
    }
    return location.pathname === href;
  };

  return (
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300" style={{top: 0, left: 0, right: 0}}>
        {/* Top Bar */}
        <div className="bg-stone-800 text-white py-2 px-4 hidden sm:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#A14A00]" />
                <span>Call us +260 975 860 675</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#A14A00]" />
                <span>service@notchtl.com</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="p-3 bg-mahogany-dark hover:bg-mahogany-bright rounded-lg transition-colors duration-300">
                  <Facebook className="w-2 h-2" />
                </a>
                <a href="#" className="p-3 bg-mahogany-dark hover:bg-mahogany-bright rounded-lg transition-colors duration-300">
                  <Instagram className="w-2 h-2" />
                </a>
                <a href="#" className="p-3 bg-mahogany-dark hover:bg-mahogany-bright rounded-lg transition-colors duration-300">
                  <Twitter className="w-2 h-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center order-first">
              <a href="/" className="text-2xl font-bold text-stone-800 hover:text-yellow-800 transition-colors duration-200">
                Nguvu Woodcraft
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 relative">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`flex items-center font-medium transition-colors duration-200 relative group ${
                      isActive(item.href) ? 'text-yellow-800' : 'text-stone-700 hover:text-yellow-800'
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg
                        className={`ml-1 w-3 h-3 fill-current ${
                          item.submenu.some(subitem => isActive(subitem.href)) ? 'text-yellow-800' : 'text-stone-700'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.516 7.548a.625.625 0 0 1 .884 0L10 11.148l3.6-3.6a.625.625 0 1 1 .884.884l-4.042 4.042a.625.625 0 0 1-.884 0L5.516 8.432a.625.625 0 0 1 0-.884z" />
                      </svg>
                    )}
                    <span className={`absolute inset-x-0 -bottom-1 h-0.5 transform scale-x-0 transition-transform duration-200 ${
                      isActive(item.href) || item.submenu?.some(subitem => isActive(subitem.href))
                        ? 'bg-yellow-800 scale-x-100'
                        : 'bg-stone-900 group-hover:scale-x-100'
                    }`}></span>
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-stone-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 p-4">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className={`block px-4 py-2 rounded transition-colors duration-200 ${
                            isActive(subitem.href) ? 'text-yellow-800 font-semibold' : 'text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#A14A00]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#A14A00]" />
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
                  className={`block font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href) ? 'text-yellow-800' : 'text-stone-700 hover:text-stone-900'
                  }`}
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
