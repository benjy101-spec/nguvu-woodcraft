import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Truck, Shield, Eye, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      {/* Trust Badges */}
      <div className="border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="flex items-center justify-center space-x-4">
              <Truck className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Country-Wide Delivery </div>
                <div className="text-sm text-stone-400">delivered promptly</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Shield className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Extended Warranty</div>
                <div className="text-sm text-stone-400">Up to 10 years coverage for peace of mind</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Eye className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Complete Transparency</div>
                <div className="text-sm text-stone-400">No hidden fees or surprises</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Leaf className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Eco-Friendly Promise</div>
                <div className="text-sm text-stone-400">Certified sustainable timber and practices</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Info (swapped) */}
          <div>
            <div className="text-3xl font-extrabold mb-6">Nguvu Woodcraft</div>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Transforming your spaces with premium furniture and exceptional design since 1999. 
              Your outdoor paradise awaits.
            </p>
            </div>
                                  
          {/* Middle Column - Newsletter (centered) */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">Subscribe to our Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-stone-700 bg-stone-800 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg text-white font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-6 mt-6 justify-center w-full max-w-md">
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Facebook className="w-4 h-3" />
              </a>
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Twitter className="w-3 h-3" />
              </a>
             </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-extrabold mb-6">Company Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-400" />
                <span className="text-lg">+260 975 860 675</span>
              </div>
              <div className="flex items-right space-x-4">
                <Mail className="w-6 h-6 text-green-400" />
                <span className="text-lg">service@notchtl.com</span>
              </div>
              <div className="flex items-right space-x-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-lg">5625 Chitoshi Rd Riverside Kitwe</span>



              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
            <div className="text-stone-400 text-base">
              © {currentYear} Nguvu Woodcraft. All rights reserved.
            </div>
            
           </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
