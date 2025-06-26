import React from 'react';
import { ArrowRight, Leaf, Award, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-8">
            Transform Your
            <span className="block text-amber-400">Outdoor Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover premium outdoor furniture and design solutions that blend comfort, 
            style, and durability for the perfect outdoor living experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Shop Collections
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Design Consultation
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="font-medium">Sustainable Materials</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Truck className="w-6 h-6 text-blue-400" />
              <span className="font-medium">Free Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;