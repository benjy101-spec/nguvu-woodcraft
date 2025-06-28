import React from 'react';
import { ArrowRight, Leaf, Award, Truck } from 'lucide-react';
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.bassettfurniture.com/dw/image/v2/BGNC_PRD/on/demandware.static/-/Sites-bassett-Library/default/dwd3e7a906/2676-LSECTA-Beckham-FA21.jpeg)`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-10">
              Strong and Durable
              <span className="block text-[#B75A00]">WoodCraft</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover premium furniture and design solutions that blend comfort, 
              style, and durability for the perfect living experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => window.location.href = '/products'}
                className="bg-gradient-to-r from-yellow-700 via-orange-600 to-yellow-500 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center group"
              >
                Products Offered
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-yellow-300" />
              </button>
              <button
                onClick={() => window.location.href = '/contacts'}
                className="border-2 border-yellow-600 text-white hover:bg-gradient-to-r hover:from-yellow-600 hover:via-orange-600 hover:to-yellow-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Leaf className="w-6 h-6 text-yellow-600" />
                <span className="font-medium">Sustainable Materials</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-6 h-6 text-yellow-600" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Truck className="w-6 h-6 text-yellow-600" />
                <span className="font-medium">Country-wide Delivery</span>
              </div>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
