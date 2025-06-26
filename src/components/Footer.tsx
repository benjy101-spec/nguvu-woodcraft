import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      {/* Trust Badges */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-8 h-8 text-amber-400" />
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-stone-400">Orders over $2,000</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-amber-400" />
              <div>
                <div className="font-semibold">Warranty</div>
                <div className="text-sm text-stone-400">Up to 10 years</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="w-8 h-8 text-amber-400" />
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm text-stone-400">30-day policy</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="w-8 h-8 text-amber-400" />
              <div>
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm text-stone-400">SSL Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">Outdoor Interiors</div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Transforming outdoor spaces with premium furniture and exceptional design since 1999. 
              Your outdoor paradise awaits.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>1-800-OUTDOOR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>hello@outdoorinteriors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>15 Showroom Locations</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 rounded-lg transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Dining Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Lounge Furniture</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Fire Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Umbrellas & Shade</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Garden Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Outdoor Kitchens</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sale Items</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Design Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Delivery & Assembly</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Care & Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Warranty Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Trade Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Partnerships</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © {currentYear} Outdoor Interiors. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-stone-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
            </div>

            <div className="flex items-center space-x-2 text-stone-400 text-sm">
              <span>Secure payments by</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-xs flex items-center justify-center text-white font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;