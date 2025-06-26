import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, CreditCard, Shield, Truck, RotateCcw } from 'lucide-react';

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
                <div className="font-semibold text-lg">Free Shipping</div>
                <div className="text-sm text-stone-400">Orders over $2,000</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Shield className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Warranty</div>
                <div className="text-sm text-stone-400">Up to 10 years</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <RotateCcw className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Transparency</div>
                <div className="text-sm text-stone-400">No hidden fees</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <CreditCard className="w-9 h-9 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <div className="font-semibold text-lg">Eco Promise</div>
                <div className="text-sm text-stone-400">Certified sustainable timber</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-extrabold mb-6">Nguvu Woodcraft</div>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Transforming your spaces with premium furniture and exceptional design since 1999. 
              Your outdoor paradise awaits.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-400" />
                <span className="text-lg">+260 975 860 675</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-green-400" />
                <span className="text-lg">service@notchtl.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-lg">5625 Chitoshi Rd Riverside Kitwe</span>
              </div>
            </div>

            <div className="flex space-x-6 mt-8">
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-stone-800 hover:bg-green-700 rounded-lg transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

        {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Story</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-stone-400 text-base">
              © {currentYear} Nguvu Woodcraft. All rights reserved.
            </div>
            
            <div className="flex space-x-8 text-base text-stone-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Accessibility</a>
            </div>

         </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
